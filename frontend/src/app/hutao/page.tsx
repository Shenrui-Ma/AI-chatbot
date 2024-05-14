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
import Image from "next/image";

export default function Test() {
  const imagePath = "/images/hutao.png";

  return (
    <MessageProvider>
      {" "}
      {/* 使用MessageProvider包裹组件 */}
      <div className="flex relative min-h-screen">
        <div className="flex-col">
          <div className="flex absolute left-40 top-[15%] border-8 border-pink-300 rounded-lg w-[500px] h-[350px]">
            <Image
              src="/images/往生堂.png"
              alt="往生堂"
              width={500}
              height={350}
            />
          </div>
          <div className="flex absolute left-40 top-[50%] border-8 border-pink-300 rounded-lg w-[500px] h-[350px]">
            <Image
              src="/images/往生堂2.png"
              alt="往生堂"
              width={500}
              height={350}
            />
          </div>
        </div>
        <ItemAuthor />
        <ButtonShare />
        <Sidebar />
        <div className="flex flex-col items-center justify-center w-full">
          <div className="relative flex justify-center items-center w-full">
            <div className="absolute left-0 flex flex-col items-center bg-pink-400"></div>
            <ImageDisplayComponent src={imagePath} />
            <div className="absolute right-20 top-10">
              <OutputDisplayComponent />
            </div>
          </div>
          <InputComponent character={"Hutao"} />
        </div>
      </div>
    </MessageProvider>
  );
}
