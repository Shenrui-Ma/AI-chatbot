import Link from "next/link";
import Image from "next/image";

export default function ItemSidebar() {
  return (
    <div className="flex h-screen font-times">
      <div className="w-24 h-screen bg-gray-200 flex flex-col justify-between items-center py-4 border-4 border-gray-900 fixed left-0">
        <div className="mt-4">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full border-2 border-amber-400 w-16 h-16"
          />
        </div>
        <div className="flex flex-col space-y-5 grow mt-10">
          <div>
            <Link
              href="/login"
              className="flex items-center justify-center bg-blue-200 text-black text-lg rounded-full hover:bg-blue-600 font-bold border-4 border-black w-16 h-16"
            >
              Log in
            </Link>
          </div>
          <div>
            <Link
              href="/history"
              className="flex items-center justify-center bg-blue-200 text-black text-lg rounded-full hover:bg-blue-600 font-bold border-4 border-black w-16 h-16"
            >
              History
            </Link>
          </div>
          <div>
            <Link
              href="/history"
              className="flex items-center justify-center bg-blue-200 text-black text-lg rounded-full hover:bg-blue-600 font-bold border-4 border-black w-16 h-16"
            >
              Theme
            </Link>
          </div>
        </div>
        <div className="mb-4">
          <Link
            href="https://github.com/Azrael-76/AI-chatbot"
            className="flex items-center justify-center bg-purple-500 text-amber-300 text-lg py-2 px-4 rounded-full hover:bg-purple-700 font-bold border-4 border-green-900"
          >
            BETA
          </Link>
        </div>
      </div>
    </div>
  );
}
