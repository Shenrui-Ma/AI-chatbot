import requests
import json
from get_api_key_baidu import get_access_token


def ernie():
    access_token = get_access_token()
    url = f"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token={access_token}"

    payload = json.dumps(
        {
            "messages": [
                {"role": "user", "content": "你好"},
                {
                    "role": "assistant",
                    "content": "你好！很高兴能够和你交流。请问有什么我可以帮助你的吗？无论是关于学习、工作、生活还是其他方面的问题，我都会尽力为你解答。",
                },
                {"role": "user", "content": "给我唱一首生日歌"},
            ],
            "temperature": 0.95,
            "top_p": 0.8,
            "penalty_score": 1,
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


if __name__ == "__main__":
    ernie()
