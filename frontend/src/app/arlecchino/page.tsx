"use client";
import React, { useState } from "react";
import InputComponent from "@/components/InputComponent";
import ImageDisplayComponent from "@/components/ImageDisplayComponent";
import WordsAfterClick from "@/components/WordsAfterClick";
import { MessageProvider } from "@/components/MessageContext";
import Sidebar from "@/components/item-sidebar";
import ItemAuthor from "@/components/item-author";
import ButtonShare from "@/components/button-share";
import Certificates from "@/components/item-certificates";
import OutputDisplayComponent from "@/components/OutputDisplayComponent";
import Image from "next/image";

const Chat = () => {
  return (
    <MessageProvider>
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <Sidebar />
        <div className="flex w-[600px] h-[1200px] relative mb-10 text-6xl font-bold border-4 border-black rounded-md px-4 py-2 overflow-hidden text-center justify-center items-center bg-red-400 ">
          How dare you ?
        </div>

        <div className="flex flex-col items-center relative bottom-[20px]">
          <Image
            src="/images/arlecchino.png"
            width={450}
            height={800}
            alt="你想的美"
            className="border-8 border-red-800 object-cover"
          />
          <div className="mt-4">
            <InputComponent character={"Arlecchino"} />
          </div>
        </div>
        <div className="absolute right-20 top-10">
          <OutputDisplayComponent />
        </div>

        <ItemAuthor />
        <ButtonShare />
      </div>
    </MessageProvider>
  );
};

export default Chat;
