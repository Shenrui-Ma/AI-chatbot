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

export default function Test() {
  const imagePath = "/images/cloth1.png";

  return (
    <div className="flex relative">
      <div className="flex flex-col justify-center items-center w-full">
        {/* 将 ImageDisplayComponent 放在 InputComponent 上面 */}
        <ImageDisplayComponent src={imagePath} />
        <InputComponent />
      </div>
      <ItemAuthor />
      <ButtonShare />
      <BubbleChiori />
      <Sidebar />
    </div>
  );
}
