import json
import random
import time
import urllib.parse
import urllib.request
import uuid
import websocket
from PIL import Image
import io
import base64


class SDComfyUIConfig:
    def __init__(
        self,
        server_ip,
        server_port=8188,
        person_image_path=None,
        clothes_image_path=None,
        prompt=None,
        template_name=None,
        output_node_id=None,
    ):
        self.server_ip = server_ip
        self.server_port = server_port
        self.prompt = prompt
        self.template_name = template_name
        self.output_node_id = output_node_id

        # 额外添加两个参数person_image_path和clothes_image_path，但在初始化时不需要传入，默认为None
        self.person_image_path = person_image_path
        self.clothes_image_path = clothes_image_path


class SDComfyUIApi:
    def __init__(self, config: SDComfyUIConfig) -> None:
        self.SERVER_ADDRESS = config.server_ip + ":" + str(config.server_port)
        self.CLIENT_ID = str(uuid.uuid4())
        self.config = config

    def find_positive_prompt_node_id(self, template):
        for node_id, node_info in template.items():
            if node_info.get("class_type") == "CLIPTextEncode":
                return node_id
        return None

    def find_k_sampler_node_id(self, template):
        for node_id, node_info in template.items():
            if node_info.get("class_type") == "KSampler":
                return node_id
        return None

    def find_output_node_id(self, template):
        for node_id, node_info in template.items():
            if node_info.get("class_type") == "SaveImage":
                return node_id
        return None

    def queue_prompt(self, prompt=None):  # 默认prompt可以为空
        # 向服务器发送提示（prompt），并返回服务器的响应
        p = {"prompt": prompt, "client_id": self.CLIENT_ID}
        data = json.dumps(p).encode("utf-8")  # 将数据编码为JSON格式
        req = urllib.request.Request(  # 发送请求
            "http://{}/prompt".format(self.SERVER_ADDRESS), data=data
        )
        return json.loads(urllib.request.urlopen(req).read())  # 返回服务器的响应

    def get_image(self, filename, subfolder, folder_type):
        # 从服务器获取指定的图像
        data = {"filename": filename, "subfolder": subfolder, "type": folder_type}
        url_values = urllib.parse.urlencode(data)
        with urllib.request.urlopen(
            "http://{}/view?{}".format(self.SERVER_ADDRESS, url_values)
        ) as response:
            return response.read()

    def get_history(self, prompt_id):
        # 获取指定提示ID的历史记录
        with urllib.request.urlopen(
            "http://{}/history/{}".format(self.SERVER_ADDRESS, prompt_id)
        ) as response:
            return json.loads(response.read())

    def get_images(self, ws, prompt):
        # 通过WebSocket连接获取图像
        prompt_id = self.queue_prompt(prompt)["prompt_id"]
        output_images = {}
        while True:
            out = ws.recv()
            if isinstance(out, str):
                message = json.loads(out)
                if (
                    message["type"] == "executing"
                    and message["data"]["node"] is None
                    and message["data"]["prompt_id"] == prompt_id
                ):
                    break  # 执行完成
            else:
                continue  # 忽略二进制数据

        history = self.get_history(prompt_id)[prompt_id]
        for o in history["outputs"]:
            for node_id in history["outputs"]:
                node_output = history["outputs"][node_id]
                if "images" in node_output:
                    images_output = []
                    for image in node_output["images"]:
                        image_data = self.get_image(
                            image["filename"], image["subfolder"], image["type"]
                        )
                        images_output.append(image_data)
                output_images[node_id] = images_output

        return output_images

    def generate_image(self, prompt, template_name, output_node_id, seed=None) -> bytes:
        PROMPT_TEXT = open(f"./templates/{template_name}.json", encoding="utf-8").read()
        payload = json.loads(PROMPT_TEXT)

        # 使用函数获取节点id
        positive_prompt_node_id = self.find_positive_prompt_node_id(payload)
        k_sampler_node_id = self.find_k_sampler_node_id(payload)
        output_node_id = self.find_output_node_id(payload)  # 重新获取output_node_id

        # 根据获取的节点id修改payload
        if positive_prompt_node_id:
            payload[positive_prompt_node_id]["inputs"]["text"] = prompt
        if k_sampler_node_id:
            payload[k_sampler_node_id]["inputs"]["seed"] = (
                seed if seed is not None else random.randint(0, 1000000)
            )

        t = time.time()
        ws = websocket.WebSocket()
        ws.connect("ws://{}/ws?clientId={}".format(self.SERVER_ADDRESS, self.CLIENT_ID))
        images = self.get_images(ws, payload)
        print("Time taken:", time.time() - t)

        # 返回指定节点ID的第一张图像
        return images[output_node_id][0] if output_node_id in images else None


class SDComfyUI_i2i_Api(SDComfyUIApi):
    def __init__(self, config: SDComfyUIConfig) -> None:
        super().__init__(config)

    def image_to_base64(self, image_path):
        # 将图片转换为Base64编码
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode("utf-8")

    def generate_image_from_image(
        self, image_path, template_name, output_node_id, seed=None
    ) -> bytes:
        # 读取模板
        PROMPT_TEXT = open(f"./templates/{template_name}.json", encoding="utf-8").read()
        payload = json.loads(PROMPT_TEXT)

        # 将图片转换为Base64编码
        image_base64 = self.image_to_base64(image_path)

        # 使用函数获取节点id
        positive_prompt_node_id = self.find_positive_prompt_node_id(payload)
        k_sampler_node_id = self.find_k_sampler_node_id(payload)
        output_node_id = self.find_output_node_id(payload)  # 重新获取output_node_id

        # 根据获取的节点id修改payload
        if positive_prompt_node_id:
            payload[positive_prompt_node_id]["inputs"]["image"] = image_base64
        if k_sampler_node_id:
            payload[k_sampler_node_id]["inputs"]["seed"] = (
                seed if seed is not None else random.randint(0, 1000000)
            )

        t = time.time()
        ws = websocket.WebSocket()
        ws.connect("ws://{}/ws?clientId={}".format(self.SERVER_ADDRESS, self.CLIENT_ID))
        images = self.get_images(ws, payload)
        print("Time taken:", time.time() - t)

        # 返回指定节点ID的第一张图像
        return images[output_node_id][0] if output_node_id in images else None


def main(config):
    sd_client = SDComfyUIApi(config)

    # get parameters from config
    prompt = config.prompt
    template_name = config.template_name
    output_node_id = config.output_node_id

    # generate image
    image_data = sd_client.generate_image(prompt, template_name, output_node_id)
    # 这里可以添加代码来处理image_data，例如保存到文件或显示图像

    # show image
    image = Image.open(io.BytesIO(image_data))
    image.show()


if __name__ == "__main__":
    # set custom parameters
    server_ip = "127.0.0.1"
    prompt = "best quality,masterpiece,artistic,1girl,standing,blue eyes,blonde hair,blue dress,blue ribbon,ribbon,ribbon in hair,smile,smiling,standing,white background"
    template_name = "generate_cloth_meinamix"
    output_node_id = "15"

    # create config
    config = SDComfyUIConfig(
        server_ip=server_ip,
        prompt=prompt,
        template_name=template_name,
        output_node_id=output_node_id,
    )

    main(config)
