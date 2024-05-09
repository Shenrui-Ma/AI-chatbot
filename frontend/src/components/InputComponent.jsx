"use client";
import React, { useState } from "react";

// 输入框组件
function InputComponent() {
  const [input, setInput] = useState("");

  // 处理输入框变化
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // 处理提交
  const handleSubmit = async () => {
    await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });
    setInput("");
  };

  return (
    <div className="mt-5 border-4 border-black rounded-lg p-4 flex items-center">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="border-4 border-black rounded-lg p-4 flex-grow mr-4"
      />
      <button
        onClick={handleSubmit}
        className="border-4 border-black rounded-lg p-4 bg-blue-500 text-white hover:bg-blue-700"
      >
        发♂送
      </button>
    </div>
  );
}

export default InputComponent;
