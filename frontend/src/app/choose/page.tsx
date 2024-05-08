"use client";
import Card from "@/components/item-card";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/item-sidebar";
import ItemAuthor from "@/components/item-author";
import ButtonShare from "@/components/button-share";
import BubbleFurina from "@/components/bubble-furina";
import ItemCommentCard from "@/components/item-comment-card";

const teachers = [
  {
    teacherName: "罗志勇教授",
    teacherMajor: "机器学习",
    description: "“我普通话不标准吗？”",
    imageUrl: "/images/罗志勇.png",
    pageUrl: "/luoZhiYong",
  },
  {
    teacherName: "于东教授",
    teacherMajor: "C++编程",
    description: "“今天的教室稍显稀疏哇”",
    imageUrl: "/images/于东.jpg",
    pageUrl: "/yuDong",
  },
  {
    teacherName: "刘鹏远教授",
    teacherMajor: "Python",
    description: "“没交作业，该罚！上课缺勤，该罚！”",
    imageUrl: "/images/刘鹏远.png",
    pageUrl: "/liuPengYuan",
  },
  ...Array(7).fill({
    teacherName: "阿蕾奇诺姐姐在从壁炉之家搜集教师~",
    teacherMajor: "至冬国执行官",
    imageUrl: "/images/default.jpg",
    pageUrl: "/arlecchino",
  }),
];

const comments = [
  {
    userName: "哦马自立曼波",
    comment:
      "“当时他的手离我的手机只有0.01厘米...吓得我直到下课也没敢再打开美团外卖”",
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

export default function ChoosePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <ButtonShare />
      <BubbleFurina />
      <Sidebar />
      <div className="fixed flex-col items-center justify-center min-h-screen w-full py-2 ml-73">
        {teachers.map((teacher, index) => (
          <div key={index} className="mb-4 w-full flex justify-center">
            <Card
              teacherName={teacher.teacherName}
              teacherMajor={teacher.teacherMajor}
              description={teacher.description}
              imageUrl={teacher.imageUrl}
              pageUrl={teacher.pageUrl}
            />
          </div>
        ))}
      </div>
      <div className="fixed flex-col items-center justify-center min-h-screen w-full py-2 ml-73">
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
      <ItemAuthor />
    </div>
  );
}
