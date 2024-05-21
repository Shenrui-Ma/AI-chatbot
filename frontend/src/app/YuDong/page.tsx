"use client";
import React, { useState } from "react";
import InputComponent from "@/components/InputComponent";
import ImageDisplayComponent from "@/components/ImageDisplayComponent";
import WordsAfterClick from "@/components/WordsAfterClick";
import { MessageProvider } from "@/components/MessageContext";
import OutputDisplayComponent from "@/components/OutputDisplayComponent";
import Sidebar from "@/components/item-sidebar";
import ItemAuthor from "@/components/item-author";
import ButtonShare from "@/components/button-share";
import Certificates from "@/components/item-certificates";
import ChatHistory from "@/components/ChatHistory";

export default function YuDong() {
  const imagePath = "/images/YuDong.png";

  return (
    <MessageProvider>
      {" "}
      {/* 使用MessageProvider包裹组件 */}
      <div className="flex relative min-h-screen">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="relative flex justify-center items-center w-full">
            <div className="flex flex-col relative right-[18vh] bottom-20">
              <ChatHistory />
            </div>
            <div className="flex flex-col relative right-[14vh]">
              <ImageDisplayComponent src={imagePath} />
            </div>
            <div className="absolute right-20 top-10">
              <OutputDisplayComponent />
            </div>
          </div>
          <InputComponent character={"LuoZhiyong"} />
        </div>
        <Sidebar />
        <ItemAuthor />
        <ButtonShare />
      </div>
    </MessageProvider>
  );
}
