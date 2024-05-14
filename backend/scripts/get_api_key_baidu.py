import requests
import os
from dotenv import load_dotenv


def get_api_key_baidu():
    load_dotenv()  # 加载环境变量
    client_id = os.getenv("CLIENT_ID")
    client_secret = os.getenv("CLIENT_SECRET")
    # print(f"client_id: {client_id}, client_secret: {client_secret}")
    print("client_id检索成功")
    print("client_secret检索成功")
    return client_id, client_secret


def get_access_token():
    client_id, client_secret = get_api_key_baidu()
    url = "https://aip.baidubce.com/oauth/2.0/token"
    payload = {
        "grant_type": "client_credentials",
        "client_id": client_id,
        "client_secret": client_secret,
    }
    headers = {"Content-Type": "application/x-www-form-urlencoded"}

    response = requests.post(url, headers=headers, data=payload)

    if response.status_code == 200:
        token_data = response.json()
        access_token = token_data.get("access_token", None)
        if access_token:
            # print("Access Token:", access_token)
            print("access token检索成功")
            return access_token
        else:
            print("Error: Access token not found in the response.")
    else:
        print(
            f"Error: Failed to retrieve access token with status code {response.status_code}"
        )


if __name__ == "__main__":
    get_access_token()
