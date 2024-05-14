"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "@/components/item-sidebar";
import ItemAuthor from "@/components/item-author";
import ButtonShare from "@/components/button-share";
import BubbleChiori from "@/components/bubble-chiori";
import ItemCommentCard from "@/components/item-comment-card";
import InputComponent from "@/components/InputComponent";
import ImageDisplayComponent from "@/components/ImageDisplayComponent";
import OutputDisplayComponent from "@/components/OutputDisplayComponent";
import { MessageProvider } from "@/components/MessageContext";

export default function Test() {
  const imagePath = "/images/cloth1.png";

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
          <InputComponent />
        </div>
        <ItemAuthor />
        <ButtonShare />
        <BubbleChiori />
        <Sidebar />
      </div>
    </MessageProvider>
  );
}
