import Image from "next/image";
import Link from "next/link";

export default function ItemAuthor(props: {}) {
  return (
    <div className="fixed right-2 bottom-2 border-4 border-black shadow-md rounded-md w-[300px] h-[120px] p-2 bg-amber-600 ">
      <Link href="https://github.com/Azrael-76">
        <div className="flex items-center h-full">
          <Image
            src="/images/Silver_wolf.png"
            width={100}
            height={100}
            alt="Author Image"
            className="border-4 border-black rounded-full bg-amber-400 hover:bg-amber-500"
          />

          <div className="flex flex-col justify-between ml-4">
            <div className="text-xl font-bold border-4 border-black rounded-md px-4 py-2 overflow-hidden text-center bg-amber-400  hover:bg-amber-500">
              Know about the author
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
