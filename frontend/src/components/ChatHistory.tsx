import React, { useContext } from "react";
import MessageItem from "./MessageItem";
import {
  MessageContext,
  MessageContextType,
} from "@/components/MessageContext";

const ChatHistory: React.FC = () => {
  const context = useContext(MessageContext);

  if (!context) {
    return null; // 或者返回一个加载状态
  }

  const { messages } = context as MessageContextType;

  return (
    <div className="p-4 m-4 bg-gray-100 rounded-lg shadow-lg max-w-full w-auto h-auto">
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <MessageItem key={index} message={msg.message} sender={msg.sender} />
        ))
      ) : (
        <p>No messages yet.</p>
      )}
    </div>
  );
};

export default ChatHistory;
