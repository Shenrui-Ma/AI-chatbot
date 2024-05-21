"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "@/components/item-sidebar";
import ItemAuthor from "@/components/item-author";
import ButtonShare from "@/components/button-share";
import BubbleFurina from "@/components/bubble-furina";
import ItemCommentCard from "@/components/item-comment-card";
import CodeBlock from "@/components/code-block";
import InputComponent from "@/components/InputComponent";
import OutputDisplayComponent from "@/components/OutputDisplayComponent";
import ChatHistory from "@/components/ChatHistory";
import { MessageProvider } from "@/components/MessageContext";

export default function Test() {
  return (
    <div className="flex relative">
      <Sidebar />
      <ItemAuthor />
      <ButtonShare />
      <MessageProvider>
        <div className="mt-4 ml-20">
          <InputComponent character={"Arlecchino"} />
        </div>
        <div className="absolute right-20 top-10">
          <OutputDisplayComponent />
        </div>
        <div className="absolute bottom-10 left-20 w-1/2 h-1/2 overflow-auto">
          <ChatHistory />
        </div>
      </MessageProvider>
    </div>
  );
}
