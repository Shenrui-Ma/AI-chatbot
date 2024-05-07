import requests
import json
import os
from dotenv import load_dotenv


def get_api_key_baidu():
    load_dotenv()
    client_id = os.getenv("CLIENT_ID")
    client_secret = os.getenv("CLIENT_SECRET")
    return client_id, client_secret


def get_access_token():
    client_id, client_secret = get_api_key_baidu()
    url = f"https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id={client_id}&client_secret={client_secret}"
    payload = json.dumps("")
    headers = {"Content-Type": "application/json", "Accept": "application/json"}

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)


if __name__ == "__main__":
    get_access_token()
