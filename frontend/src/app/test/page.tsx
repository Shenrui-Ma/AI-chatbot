"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "@/components/item-sidebar";
import ItemAuthor from "@/components/item-author";
import ButtonShare from "@/components/button-share";
import BubbleFurina from "@/components/bubble-furina";
import ItemCommentCard from "@/components/item-comment-card";

const comments = [
  {
    userName: "哦马自立曼波",
    comment: "当时他的手离我的手机只有0.01厘米...",
    avatarUrl: "/images/user1.png",
  },
  {
    userName: "我有萌音身",
    comment:
      "“u1s1东哥的c++讲得很透彻，尤其是虚函数那一节，爱了爱了ଘ(੭ˊᵕˋ)੭* ੈ✩‧₊˚”",
    avatarUrl: "/images/user2.png",
  },
  {
    userName: "提瓦特杀猪王123",
    comment:
      "“刘sir，您的课我上了一年，时间上没了，成绩上垮了，python它难不难，我能不知道嘛嘤嘤嘤”",
    avatarUrl: "/images/user3.png",
  },
  ...Array(7).fill({
    userName: "Waiting...",
    comment: "nothing ...",
    avatarUrl: "/images/Silver_wolf.png",
  }),
];

export default function Test() {
  return (
    <div className="flex relative">
      <Sidebar />
      <ItemAuthor />
      <ButtonShare />
      <BubbleFurina />
      <div className="flex flex-col items-center justify-center min-h-screen w-full py-2 ml-73">
        {comments.map((user, index) => (
          <div key={index} className="mb-4 w-full flex justify-center">
            <ItemCommentCard
              userName={user.userName}
              comment={user.comment}
              avatarUrl={user.avatarUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
