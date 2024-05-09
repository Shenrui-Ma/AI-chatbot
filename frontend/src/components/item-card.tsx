import Image from "next/image";
import Link from "next/link";

export default function ItemCard(props: {
  teacherName: string;
  teacherMajor: string;
  description: string;
  imageUrl: string;
  pageUrl: string;
}) {
  return (
    <div className="relative border-2  bg-gray-200 border-black shadow-md rounded-md w-[300px] h-[275px] p-4 overflow-visible min-w-[300px]">
      <div className="flex justify-between items-center h-full">
        <Image
          src={props.imageUrl}
          width={100}
          height={100}
          alt="Teacher Image"
          className="border-2 border-black rounded-full"
        />
        <div className="flex flex-col justify-between ml-4">
          <div className="text-lg font-bold border-2 border-black rounded-md px-4 py-2 overflow-hidden text-center">
            {props.teacherName}
          </div>
          <div className="flex items-center justify-center border-2 border-gray-500 rounded-full px-4 py-2 my-2 text-center">
            {props.teacherMajor}
          </div>
          <div className="text-md overflow-hidden">{props.description}</div>
        </div>
      </div>
      <Link
        href={props.pageUrl}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        I want YOU!
      </Link>
    </div>
  );
}
