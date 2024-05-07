import React, { useState } from "react";
import InputComponent from "@/components/InputComponent";
import ImageDisplayComponent from "@/components/ImageDisplayComponent";
import WordsAfterClick from "@/components/WordsAfterClick";

const Chat = () => {
  return (
    // 测试：先随便展示张院长图片
    <div>
      <img src="/images/罗志勇2.png" alt="帅气逼人の罗志勇" />
      <InputComponent />
    </div>
  );
};

export default Chat;
