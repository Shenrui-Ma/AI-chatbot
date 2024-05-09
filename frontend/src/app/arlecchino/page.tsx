import React, { useState } from "react";
import InputComponent from "@/components/InputComponent";
import ImageDisplayComponent from "@/components/ImageDisplayComponent";
import WordsAfterClick from "@/components/WordsAfterClick";

const Chat = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <div className="flex w-[600px] h-[250px]  relative mb-10 text-8xl font-bold border-4 border-black rounded-md px-4 py-2 overflow-hidden text-center justify-center items-center bg-red-400 ">
        How dare you ?
      </div>
      <img
        src="/images/default.jpg"
        alt="你想的美"
        className="w-[200px] h-[200px] border-8 border-red-800 object-cover"
      />
      <InputComponent />
    </div>
  );
};

export default Chat;
