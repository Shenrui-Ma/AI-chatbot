import React, { useContext, useEffect } from "react";
import { MessageContext } from "./MessageContext";
import CodeBlock from "./code-block";

interface MessageContextType {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

function OutputDisplayComponent() {
  const { message, setMessage } = useContext(
    MessageContext
  ) as MessageContextType;

  useEffect(() => {
    fetch("http://localhost:8000/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "默认信息" }), // 这里可以根据需要修改默认消息
    })
      .then((response) => response.json())
      .then((data) => setMessage(data.result))
      .catch((error) => console.error("Error fetching data:", error));
    console.log("useEffect一次");
  }, [setMessage]);

  const renderContent = (text: string) => {
    const parts = text.split(/(```[\s\S]*?```)/g); // 使用正则表达式分割文本
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
        fontSize: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {message ? renderContent(message) : "Waiting for your words..."}
    </div>
  );
}

export default OutputDisplayComponent;
