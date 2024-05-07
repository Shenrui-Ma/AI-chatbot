"use client";
import Card from "@/components/item-card";
import { useState } from "react";

const teachers = [
  {
    teacherName: "罗志勇教授",
    teacherMajor: "机器学习",
    imageUrl: "/images/罗志勇2.png",
    pageUrl: "http://localhost:3000/luoZhiYong",
  },
  {
    teacherName: "于东教授",
    teacherMajor: "C++编程",
    imageUrl: "/images/于东.jpg",
    pageUrl: "http://localhost:3000/yuDong",
  },
  {
    teacherName: "刘鹏远教授",
    teacherMajor: "Python",
    imageUrl: "/images/刘鹏远.png",
    pageUrl: "http://localhost:3000/liuPengYuan",
  },
  ...Array(7).fill({
    teacherName: "阿蕾奇诺姐姐在从壁炉之家搜集教师~",
    teacherMajor: "至冬国执行官",
    imageUrl: "/images/default.jpg",
    pageUrl: "http://localhost:3000/default",
  }),
];

export default function ChoosePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full py-2">
      {/* <button
        className="h-12 w-36 bg-blue-200"
        onClick={() => setCount((count) => count + 1)}
      >
        {count}
      </button> */}
      {teachers.map((teacher, index) => (
        <div key={index} className="mb-4">
          <Card
            teacherName={teacher.teacherName}
            teacherMajor={teacher.teacherMajor}
            description=""
            imageUrl={teacher.imageUrl}
            pageUrl={teacher.pageUrl}
          />
        </div>
      ))}
    </div>
  );
}
