# generate_speech_fishspeech.py
import requests
import base64
import json
from fastapi import HTTPException


def generate_speech(text):
    # 读取音频文件并进行 Base64 编码
    with open("C:/Users/KingR/Desktop/hkt.wav", "rb") as audio_file:
        encoded_audio = base64.b64encode(audio_file.read()).decode("utf-8")

    # 构建请求体
    request_body = {
        "text": "六月,十二号，第一次测试开始。" + text,
        "reference_text": "听你这样描述哦，感觉不是特别的难。",
        "reference_audio": encoded_audio,
        "max_new_tokens": 0,
        "chunk_length": 150,
        "top_p": 0.8,
        "repetition_penalty": 1.5,
        "temperature": 0.8,
        "speaker": None,
        "emotion": None,
        "format": "wav",
        "streaming": False,
        "ref_json": "ref_data.json",
        "ref_base": "ref_data",
    }

    # 发送 POST 请求
    response = requests.post(
        "http://127.0.0.1:8001/v1/invoke",
        headers={"accept": "*/*", "Content-Type": "application/json"},
        data=json.dumps(request_body),
    )

    # 检查响应头中的 Content-Type
    content_type = response.headers.get("content-type")
    print(f"Content-Type: {content_type}")

    # 如果响应是音频文件，则保存到本地文件
    if "audio/wav" in content_type:
        audio_file_path = "output_audio_test.wav"
        with open(audio_file_path, "wb") as audio_file:
            audio_file.write(response.content)
        print("音频文件已保存为", audio_file_path)
        return audio_file_path
    else:
        # 打印响应体内容
        print(response.text)
        raise HTTPException(status_code=500, detail="语音生成失败")
