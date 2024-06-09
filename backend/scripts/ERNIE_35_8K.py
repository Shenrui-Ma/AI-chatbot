import requests
import json
from scripts.get_api_key_baidu import get_access_token
from scripts.character_settings import character_settings


def ernie(prompt, character):
    access_token = get_access_token()
    url = f"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token={access_token}"

    character_setting = character_settings.get(character, character_settings["default"])

    payload = json.dumps(
        {
            "messages": [
                {"role": "user", "content": prompt},
            ],
            "temperature": 0.95,
            "top_p": 0.8,
            "penalty_score": 1,
            "system": character_setting,
            "disable_search": False,
            "enable_citation": False,
            "response_format": "text",
        }
    )
    headers = {"Content-Type": "application/json"}

    response = requests.post(url, headers=headers, data=payload)

    if response.status_code == 200:
        response_data = response.json()
        result = response_data.get("result", None)
        if result:
            print("Result:", result)
            return result
        else:
            print("Error: 'result' not found in the response.")
    else:
        print(f"Error: Failed to retrieve data with status code {response.status_code}")


# 测试
# ernie("早上好", "Hutao")
