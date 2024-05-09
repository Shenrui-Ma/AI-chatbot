import Image from "next/image";
import Link from "next/link";

export default function ItemCommentCard(props: {
  userName: string;
  comment: string;
  avatarUrl: string;
}) {
  return (
    <div className="relative bg-gray-200 border-2 border-black shadow-md rounded-md w-[700px] h-[275px] p-4 overflow-visible min-w-[300px]">
      <div className="flex justify-between items-center h-full">
        <Image
          src={props.avatarUrl}
          width={100}
          height={100}
          alt="user"
          className="border-2 border-black rounded-full"
        />
        <div className="flex flex-col justify-between ml-4">
          <div className="item-center text-lg font-bold border-2 border-black rounded-md px-4 py-2 overflow-hidden text-center">
            {props.userName}
          </div>
          <div className="flex item-center items-center justify-center border-2 border-gray-500 rounded-full px-4 py-2 my-2 text-center">
            {props.comment}
          </div>
        </div>
      </div>
    </div>
  );
}
