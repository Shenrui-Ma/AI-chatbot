import React, { useContext, useEffect } from "react";
import { MessageContext } from "./MessageContext";

function OutputDisplayComponent() {
  const { message, setMessage } = useContext(MessageContext);

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

  return (
    <div
      className="border-8 border-amber-500 rounded-lg p-4 m-4 bg-amber-100"
      style={{
        width: "500px",
        height: "800px",
        overflow: "auto",
        fontSize: "32px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {message ? message : "Loading..."}
    </div>
  );
}

export default OutputDisplayComponent;
