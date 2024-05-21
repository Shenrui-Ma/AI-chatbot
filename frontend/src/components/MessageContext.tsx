import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// 定义消息类型
interface Message {
  message: string;
  sender: "user" | "bot";
}

// 定义上下文的类型
export interface MessageContextType {
  messages: Message[];
  addMessage: (message: string, sender: "user" | "bot") => void;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

// 创建上下文并指定类型
export const MessageContext = createContext<MessageContextType | undefined>(
  undefined
);

// 定义 MessageProvider 组件的属性类型
interface MessageProviderProps {
  children: ReactNode;
}

// 创建 MessageProvider 组件
export const MessageProvider: React.FC<MessageProviderProps> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");

  const addMessage = (message: string, sender: "user" | "bot") => {
    setMessages((prevMessages) => [...prevMessages, { message, sender }]);
  };

  return (
    <MessageContext.Provider
      value={{ messages, addMessage, message, setMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
};
