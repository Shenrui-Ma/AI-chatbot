import React, { useContext, useEffect } from "react";
import { MessageContext, MessageContextType } from "./MessageContext";
import CodeBlock from "./code-block";

function OutputDisplayComponent() {
  const context = useContext(MessageContext);

  if (!context) {
    return null; // 或者返回一个加载状态
  }

  const { message, setMessage } = context as MessageContextType;

  useEffect(() => {
    fetch("http://localhost:8000/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "默认信息" }), // 这里可以根据需要修改默认消息
    })
      .then((response) => response.json())
      .then((data) => {
        // 检查返回的数据中是否包含 ERNIE 模型的结果
        // if (data.result) {
        //   // 如果包含，将结果设置为 message 状态
        setMessage(data.result);
        // }
      })
      .catch((error) => console.error("Error fetching data:", error));
    console.log("useEffect一次");
  }, [setMessage]);

  const renderContent = (text: string) => {
    const parts = text.split(/(```[\s\S]*?```)/g); // 使用正则表达式分割文本
    console.log("Parts:", parts); // 打印 parts 数组
    return parts.map((part, index) => {
      if (part.startsWith("```") && part.endsWith("```")) {
        const code = part.slice(3, -3).trim(); // 去除反引号并去除首尾空白
        return <CodeBlock key={index} code={code} />;
      }
      return <p key={index}>{part}</p>;
    });
  };

  return (
    <div
      className="border-8 border-amber-500 rounded-lg p-4 m-4 bg-amber-100"
      style={{
        width: "500px",
        height: "950px",
        overflow: "auto",
        fontSize: "18px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {message ? renderContent(message) : "Waiting for your words..."}
    </div>
  );
}

export default OutputDisplayComponent;
