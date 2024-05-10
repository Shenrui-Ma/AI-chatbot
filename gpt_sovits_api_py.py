import requests
import json


class GPTSovitsApiParams:
    def __init__(self, text, refer_audio_url, refer_audio_text, speech_speed):
        self.text = text
        self.refer_audio_url = refer_audio_url
        self.refer_audio_text = refer_audio_text
        self.speech_speed = speech_speed


class GPTSovitsClient:
    def __init__(self, server_addr):
        self.server_addr = server_addr

    def generate_audio(self, params):
        payload = {
            "text": params.text,
            "text_lang": "zh",
            "ref_audio_path": params.refer_audio_url,
            "prompt_text": params.refer_audio_text,
            "prompt_lang": "zh",
            "top_k": 5,
            "top_p": 1,
            "temperature": 1,
            "text_split_method": "cut_custom",
            "batch_size": 10,
            "batch_threshold": 0.75,
            "split_bucket": False,
            "return_fragment": True,
            "speed_factor": params.speech_speed,
        }

        headers = {"Content-Type": "application/json"}

        response = requests.post(
            f"{self.server_addr}/tts", headers=headers, data=json.dumps(payload)
        )

        if not response.ok:
            raise Exception(
                f"HTTP error when calling GPT-Sovits API! Status: {response.status_code}"
            )

        return response.json()


# 使用示例
params = GPTSovitsApiParams(
    "你好，世界！", "http://example.com/audio.mp3", "参考文本", 1.0
)
client = GPTSovitsClient("http://your-server-address.com")
try:
    result = client.generate_audio(params)
    print(result)
except Exception as e:
    print(str(e))
