import Card from "@/components/item-card";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/item-sidebar";
import ItemAuthor from "@/components/item-author";
import ButtonShare from "@/components/button-share";

export default function HomePage() {
  return (
    <div className="flex">
      {/* 侧边栏 */}
      {/* 分享按钮 */}
      <ButtonShare />

      {/* 主内容区 */}
      <div className="flex-grow">
        <div className="flex justify-center ">
          <div className="text-2xl mt-8 border p-4 border-black rounded-md bg-blue-200 font-bold font-serif ">
            孩子，我是赛博罗志勇。
            <br />
            记得写机器学习作业！
            <div className="flex justify-center items-center">
              <Image
                src="/images/罗志勇2.png"
                alt="四倍体果蝇 Azrael-76"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen w-screen button-hover-effect relative">
          <Link
            href="/choose"
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-200 h-20 w-32 rounded-md flex justify-center items-center border-4 border-red-950"
          >
            选择你的英雄
          </Link>
        </div>
      </div>
      <Sidebar />
      <ItemAuthor />
    </div>
  );
}
