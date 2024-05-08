import Link from "next/link";
import Image from "next/image";

export default function ItemSidebar() {
  return (
    <div className="fixed top-0 h-screen ">
      {/* 侧边栏 */}
      <div className="w-24 h-screen bg-gray-200 flex flex-col justify-around items-center py-4 border-4 border-gray-900">
        {/* logo，固定在底部 */}
        <div className="fixed top-3">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full border-2 border-amber-400 w-16 h-16 "
          />
        </div>
        {/* 前三个按钮的容器 */}
        <div className="fixed space-y-3 top-20 mt-10">
          <div>
            <Link
              href="/login"
              className="flex items-center justify-center bg-blue-200 text-black rounded-full hover:bg-blue-600 font-bold border-4 border-black w-14 h-14"
            >
              登录
            </Link>
          </div>
          <div>
            <Link
              href="/history"
              className="flex items-center justify-center bg-blue-200 text-black rounded-full hover:bg-blue-600 font-bold border-4 border-black w-14 h-14"
            >
              历史
            </Link>
          </div>
          <div>
            <Link
              href="/history"
              className="flex items-center justify-center bg-blue-200 text-black rounded-full hover:bg-blue-600 font-bold border-4 border-black w-14 h-14"
            >
              主题
            </Link>
          </div>
        </div>

        {/* Beta按钮，固定在底部 */}
        <div className=" fixed bottom-3">
          <Link
            href="/beta"
            className="flex bottom-0 items-center justify-center bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-700 font-bold border-4 border-green-900"
          >
            Beta
          </Link>
        </div>
      </div>
    </div>
  );
}
