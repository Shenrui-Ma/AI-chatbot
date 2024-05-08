"use client";
import Card from "@/components/item-card";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/item-sidebar";

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
    pageUrl: "/default",
  }),
];

export default function ChoosePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col items-center justify-center min-h-screen w-full py-2 ml-73">
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
    </div>
  );
}
