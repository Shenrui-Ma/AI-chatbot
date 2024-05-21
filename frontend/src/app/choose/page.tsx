"use client";
import Card from "@/components/item-card";
import { useState } from "react";

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
    pageUrl: "/YuDong",
  },
  {
    teacherName: "刘鹏远教授",
    teacherMajor: "Python",
    description: "“没交作业，该罚！上课缺勤，该罚！”",
    imageUrl: "/images/刘鹏远.png",
    pageUrl: "/liuPengYuan",
  },
  {
    teacherName: "千织",
    teacherMajor: "服装设计",
    description: "“千织屋，永远引领枫丹的时尚”",
    imageUrl: "/images/chiori_icon.jpg",
    pageUrl: "/chiori_house",
  },
  {
    teacherName: "胡桃",
    teacherMajor: "往生业务",
    description: "“大丘丘病了二丘丘敲，三丘丘采药四丘丘摇~”",
    imageUrl: "/images/hutao_icon.png",
    pageUrl: "/hutao",
  },
  {
    teacherName: "阿蕾奇诺",
    teacherMajor: "愚人众执行官",
    description: "“滚”",
    imageUrl: "/images/arlecchino_icon.png",
    pageUrl: "/arlecchino",
  },
  ...Array(4).fill({
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
    avatarUrl: "/images/user2.gif",
  },
  {
    userName: "提瓦特杀猪王123",
    comment:
      "“刘sir，您的课我上了一年，时间上没了，成绩上垮了，python它难不难，我能不知道嘛嘤嘤嘤”",
    avatarUrl: "/images/user3.png",
  },
  {
    userName: "千织天下第一",
    comment:
      "“姐姐踩我姐姐踩我姐姐踩我姐姐踩我姐姐踩我姐姐踩我姐姐踩我姐姐踩我姐姐踩我姐姐踩我姐姐踩我姐姐踩我姐姐踩我姐姐踩我姐姐踩我”",
    avatarUrl: "/images/Silver_wolf.png",
  },
  ...Array(6).fill({
    userName: "Waiting...",
    comment: "nothing ...",
    avatarUrl: "/images/Silver_wolf.png",
  }),
];

export default function ChoosePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-normal">
      <BubbleFurina />
      <div className="flex flex-row relative ">
        <div className="flex flex-col items-center py-2 relative">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="mb-4 ml-40 flex justify-center"
              style={{ marginLeft: "45vw" }}
            >
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
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen w-full py-2 ">
        {comments.map((user, index) => (
          <div
            key={index}
            className="mb-4 w-full flex justify-center relative"
            style={{ marginRight: "5vw" }}
          >
            <ItemCommentCard
              userName={user.userName}
              comment={user.comment}
              avatarUrl={user.avatarUrl}
            />
          </div>
        ))}
      </div>
      <ButtonShare />
      <ItemAuthor />
      <Sidebar />
    </div>
  );
}
