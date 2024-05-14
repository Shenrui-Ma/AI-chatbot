import React, { useState } from "react";

function InputComponent() {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async () => {
    console.log("前端接收输入:", input),
      await fetch("http://127.0.0.1:8000/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });
    console.log("前端尝试发送信息:", input), setInput("");
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
        style={{ fontSize: "20px" }}
      >
        Send
      </button>
    </div>
  );
}

export default InputComponent;
