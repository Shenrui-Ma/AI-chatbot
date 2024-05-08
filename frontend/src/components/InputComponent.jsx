"use client";
import React, { useState } from "react";

function InputComponent() {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

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
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleSubmit}>发♂送</button>
    </div>
  );
}

export default InputComponent;
