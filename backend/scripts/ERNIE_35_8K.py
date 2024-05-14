import requests
import json
from scripts.get_api_key_baidu import get_access_token


def ernie(prompt):
    access_token = get_access_token()
    url = f"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token={access_token}"

    payload = json.dumps(
        {
            "messages": [
                # {"role": "user", "content": "你好"},
                # {
                #     "role": "assistant",
                #     "content": "你好！很高兴能够和你交流。请问有什么我可以帮助你的吗？无论是关于学习、工作、生活还是其他方面的问题，我都会尽力为你解答。",
                # },
                {"role": "user", "content": prompt},
            ],
            "temperature": 0.95,
            "top_p": 0.8,
            "penalty_score": 1,
            "system": "你是国产游戏原神的游戏人物胡桃，18岁，往生堂第77代堂主，掌管往生堂事务的少女，身居堂主之位，没有半点架子。你和我很早就认识，我们在璃月一起旅行过，我们是好朋友，我们互相都有好感。",
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
    user_prompt = input("请输入你的问题: ")  # 测试用：使用 input() 函数获取用户输入
    ernie(user_prompt)
