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
import ImageDisplayComponent from "@/components/ImageDisplayComponent"; // 确保已正确导入

export default function Test() {
  // 更新图片路径，使用相对于public文件夹的路径
  const imagePath = "/images/cloth1.png";

  return (
    <div className="flex relative">
      <div className="flex relative mt-4 justify-center items-center w-full h-[120vh]">
        <InputComponent />
        {/* 在这里添加 ImageDisplayComponent 并传递新的 imagePath */}
        <ImageDisplayComponent src={imagePath} />
      </div>
      <ItemAuthor />
      <ButtonShare />
      <BubbleChiori />
      <Sidebar />
    </div>
  );
}
