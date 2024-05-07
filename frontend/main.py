from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn
from chatbot import get_response

app = FastAPI()


class ChatRequest(BaseModel):
    message: str
    user_id: str  # 可用于处理上下文对话


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/chat")
async def chat(chat_request: ChatRequest):
    """
    接收用户的输入，返回聊天机器人的回复。
    """
    print("成功接收用户输入：", chat_request.message)
    user_input = chat_request.message
    user_id = chat_request.user_id
    try:
        response = get_response(user_input, user_id)
        return {"message": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
