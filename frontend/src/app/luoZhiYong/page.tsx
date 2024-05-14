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

const awards = [
  {
    award: "羽毛球打得最好奖",
  },
  {
    award: "以前教过高数奖",
  },
  {
    award: "以前教过C语言奖",
  },
  {
    award: "教课外号C罗奖",
  },
  {
    award: "上课看手机学生最少奖",
  },
  {
    award: "机器学习不难奖",
  },
  {
    award: "家里孩子只看过滤版抖音奖",
  },
  {
    award: "校门口人脸识别技术窃取奖",
  },
  {
    award: "教过日语学生奖",
  },
  ...Array(0).fill({
    userName: "Waiting...",
    comment: "nothing ...",
    avatarUrl: "/images/Silver_wolf.png",
  }),
];

export default function Test() {
  const imagePath = "/images/罗志勇3.png";

  return (
    <MessageProvider>
      {" "}
      {/* 使用MessageProvider包裹组件 */}
      <div className="flex relative min-h-screen">
        <ItemAuthor />
        <ButtonShare />
        <Sidebar />
        <div className="flex flex-col items-center justify-center w-full">
          <div className="relative flex justify-center items-center w-full">
            <div className="absolute left-0 flex flex-col items-center">
              {awards.map((user, index) => (
                <div
                  key={index}
                  className="mb-4 flex justify-center relative left-[300px]"
                >
                  <Certificates award={user.award} />
                </div>
              ))}
            </div>
            <ImageDisplayComponent src={imagePath} />
            <div className="absolute right-20 top-10">
              <OutputDisplayComponent />
            </div>
          </div>
          <InputComponent character={"LuoZhiyong"} />
        </div>
      </div>
    </MessageProvider>
  );
}
