import React from "react";

interface MessageItemProps {
  message: string;
  sender: "user" | "bot";
}

const MessageItem: React.FC<MessageItemProps> = ({ message, sender }) => {
  return (
    <div
      className={`p-2 m-2 w-full bg-${
        sender === "user" ? "blue-200" : "green-200"
      } rounded-lg overflow-hidden text-ellipsis whitespace-nowrap`}
      title={message} // 鼠标悬停时显示完整消息
    >
      {message}
    </div>
  );
};

export default MessageItem;
