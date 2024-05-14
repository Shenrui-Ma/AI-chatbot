"use client";
import React from "react";
import InputComponent from "@/components/InputComponent";
import Sidebar from "@/components/item-sidebar";
import ItemAuthor from "@/components/item-author";
import ButtonShare from "@/components/button-share";

const Chat = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <Sidebar />
      <div className="flex w-[600px] h-[430px] relative mb-10 text-8xl font-bold border-4 border-black rounded-md px-4 py-2 overflow-hidden text-center justify-center items-center bg-red-400 bottom-[300px]">
        How dare you ?
      </div>

      <div className="flex flex-col items-center relative bottom-[300px]">
        <img
          src="/images/default.jpg"
          alt="你想的美"
          className="w-[200px] h-[200px] border-8 border-red-800 object-cover"
        />
        <div className="mt-4">
          <InputComponent />
        </div>
      </div>

      <ItemAuthor />
      <ButtonShare />
    </div>
  );
};

export default Chat;
