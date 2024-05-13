import requests
import json
from get_api_key_baidu import get_access_token


def main():
    access_token = get_access_token()
    url = f"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token={access_token}"

    payload = json.dumps(
        {
            "temperature": 0.95,
            "top_p": 0.8,
            "penalty_score": 1,
            "disable_search": False,
            "enable_citation": False,
            "response_format": "text",
        }
    )
    headers = {"Content-Type": "application/json"}

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)


if __name__ == "__main__":
    main()
