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

export default function Test() {
  const imagePath = "/images/罗志勇2.png";

  return (
    <MessageProvider>
      {" "}
      {/* 使用MessageProvider包裹组件 */}
      <div className="flex relative">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="relative w-full flex justify-center">
            <ImageDisplayComponent src={imagePath} />
            <div className="absolute right-40 top-20">
              <OutputDisplayComponent />
            </div>
          </div>
          <InputComponent character={"LuoZhiyong"} />
        </div>
        <ItemAuthor />
        <ButtonShare />
        <Sidebar />
      </div>
    </MessageProvider>
  );
}
