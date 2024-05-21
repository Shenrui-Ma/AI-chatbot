"use client";
import React from "react";
import InputComponent from "@/components/InputComponent";
import { MessageProvider } from "@/components/MessageContext";
import Sidebar from "@/components/item-sidebar";
import ItemAuthor from "@/components/item-author";
import ButtonShare from "@/components/button-share";
import OutputDisplayComponent from "@/components/OutputDisplayComponent";
import ChatHistory from "@/components/ChatHistory";
import Image from "next/image";

const Arlecchino = () => {
  return (
    <MessageProvider>
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <Sidebar />
        <div className="flex w-[600px] h-[1200px] relative mb-10 text-6xl font-bold border-4 border-black rounded-md px-4 py-2 overflow-hidden text-center justify-center items-center bg-red-400 ">
          How dare you ?
        </div>

        <div className="flex flex-col items-center relative bottom-[20px] w-full">
          <div className="flex justify-start items-start ">
            <div className="flex flex-col relative right-[14vh]">
              <ChatHistory />
            </div>
            <div className="flex relative justify-center flex-grow right-[14vh]">
              <Image
                src="/images/arlecchino.png"
                width={450}
                height={800}
                alt="你想的美"
                className="border-8 border-red-800 object-cover"
              />
            </div>
          </div>
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

export default Arlecchino;
