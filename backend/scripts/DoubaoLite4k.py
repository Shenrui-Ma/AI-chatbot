# -*- coding: utf-8 -*-

import os
from volcenginesdkarkruntime import Ark
from dotenv import load_dotenv
from scripts.character_settings import character_settings


def get_api_key_Doubao():
    load_dotenv()  # 加载环境变量
    api_key = os.getenv("API_KEY")
    model = os.getenv("MODEL_NAME")
    return api_key, model


def chat_with_Doubao(prompt, character):
    client = Ark(
        base_url="https://ark.cn-beijing.volces.com/api/v3",
        api_key=get_api_key_Doubao()[0],
    )

    character_setting = character_settings.get(character, character_settings["default"])

    # Non-streaming:
    print("----- standard request -----")
    completion = client.chat.completions.create(
        # model="ep-20240610140329-rbnzb", # Doubao-lite-4k
        model=get_api_key_Doubao()[1],  # Doubao-pro-32k
        messages=[
            {
                "role": "system",
                "content": character_setting,
            },
            {
                "role": "user",
                "content": prompt,
            },
        ],
    )

    print(completion.choices[0].message.content)
    return completion.choices[0].message.content

    # # Streaming:
    # print("----- streaming request -----")
    # stream = client.chat.completions.create(
    #     model="ep-20240610123046-8g7jk",
    #     messages=[
    #         {"role": "system", "content": "你是胡桃，米哈游游戏《原神》中的角色"},
    #         {"role": "user", "content": "胡堂主，给我讲讲什么是检索增强生成？"},
    #     ],
    #     stream=True,
    # )
    # for chunk in stream:
    #     if not chunk.choices:
    #         continue
    #     print(chunk.choices[0].delta.content, end="")
    # print()
