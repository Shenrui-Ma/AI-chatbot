import React from "react";

export default function AwardCard(props: { award: string }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative bg-amber-300 border-2 border-black shadow-md rounded-md w-[400px] h-[80px] p-4 flex items-center justify-center">
        <div className="text-3xl font-bold text-center">{props.award}</div>
      </div>
      {/* <div className="relative bg-gray-200 border-2 border-black shadow-md rounded-md w-[400px] h-[80px] p-4 flex items-center justify-center">
        <div className="text-lg font-bold text-center">{props.award}</div>
      </div> */}
    </div>
  );
}
