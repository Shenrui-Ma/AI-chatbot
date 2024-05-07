import Card from "@/components/item-card";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex relative">
      {/* 分享按钮 */}
      <div className="absolute top-4 right-4">
        <button className="bg-black text-white p-2 rounded-full hover:bg-green-700">
          分享
        </button>
      </div>

      {/* 侧边栏 */}
      <div className="w-64 h-screen bg-gray-200 flex flex-col justify-between items-center py-10 border-4 border-gray-900">
        <div>
          <Link
            href="/login"
            className="bg-blue-300 text-black py-2 px-2 rounded-full hover:bg-blue-600 font-bold border-4 border-purple-900"
            style={{ width: "60px", height: "60px" }} // 确保宽高相等
          >
            登录
          </Link>

          {/* 增加了 mt-10 来向下移动历史按钮
          <Link
            href="/history"
            className="mt-10 bg-blue-300 text-black py-2 px-2 rounded-full hover:bg-blue-600 font-bold border-4 border-purple-900"
            style={{ width: "60px", height: "60px" }} // 确保宽高相等
          >
            历史
          </Link> */}
        </div>

        {/* Beta按钮 */}
        <div>
          <Link
            href="/beta"
            className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-700 font-bold border-4 border-green-900"
            style={{ width: "80px", height: "80px" }} // 确保宽高相等
          >
            Beta
          </Link>
        </div>
      </div>

      {/* 主内容区 */}
      <div className="flex-grow">
        <div className="flex justify-center mt-40">
          <a href="https://github.com/Azrael-76" target="_blank">
            <Image
              src="/images/Silver_wolf.png"
              alt="四倍体果蝇 Azrael-76"
              className="border-4 border-purple-400 rounded-full"
              width={100}
              height={100}
            />
          </a>
        </div>
        <h1 className="flex justify-center font-serif text-2xl mt-3">
          四倍体果蝇 Azrael-76
        </h1>
        <div className="flex justify-center">
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
    </div>
  );
}
