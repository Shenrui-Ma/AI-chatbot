import React, { useState } from "react";

function InputComponent() {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:8000/message", {
      // 修改路由为 /message
      method: "POST", // 确保使用 POST 方法
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
        发送
      </button>
    </div>
  );
}

export default InputComponent;
