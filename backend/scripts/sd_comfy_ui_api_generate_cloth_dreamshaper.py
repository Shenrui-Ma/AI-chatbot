import json
import base64
import websocket
from PIL import Image
import io
from scripts.sd_comfy_ui_api import SDComfyUIApi, SDComfyUIConfig
from backend.scripts.app import app


def generate_cloth_dreamshaper(
    prompt, template_name, output_node_id, server_ip="127.0.0.1"
):
    # 创建配置实例
    config = SDComfyUIConfig(
        prompt=prompt,
        server_ip=server_ip,
        template_name=template_name,
        output_node_id=output_node_id,
    )

    # 初始化SDComfyUIApi实例
    sd_client = SDComfyUIApi(config)

    # 生成图像
    image_data = sd_client.generate_image(prompt, template_name, output_node_id)

    return image_data


if __name__ == "__main__":
    # 定义参数
    # my_prompt = "no_human,no_body,dress,blue dress,jewelry,gem,blue_gemstone"
    # my_prompt = "long blue dress with jewelry and blue gemstone"
    # my_prompt = "(best quality,8k),masterpiece,none background,evening gown, gown, red roses, roses, long hemline, hemline, upturned collar, collar,"
    # my_prompt = "best quality,8k,masterpiece,none background,jacket,black jacket,leather jacket"
    # my_prompt = "best quality,8k,masterpiece,none background,black maillot,latex cloth,"
    # my_prompt = "best quality,8k,masterpiece,none background,grown,evening dress,detailed"
    my_prompt = app.get_prompt()

    my_template_name = "generate_cloth_dreamshaper"
    # my_template_name = "generate_cloth_dreamshaper(900x1500)"
    my_output_node_id = "15"
    my_server_ip = "127.0.0.1"

    # 调用函数生成图像
    image_data = generate_cloth_dreamshaper(
        my_prompt, my_template_name, my_output_node_id, my_server_ip
    )

    # 显示图像（可选）
    image = Image.open(io.BytesIO(image_data))
    image.show()
