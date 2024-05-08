import React, { useState } from "react";
import InputComponent from "@/components/InputComponent";
import ImageDisplayComponent from "@/components/ImageDisplayComponent";
import WordsAfterClick from "@/components/WordsAfterClick";

const Chat = () => {
  return (
    <div>
      <img
        src="/images/default.jpg"
        alt="你想的美"
        className="w-[200px] h-[200px]"
      />
      <InputComponent />
    </div>
  );
};

export default Chat;
