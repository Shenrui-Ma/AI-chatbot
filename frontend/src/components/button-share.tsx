import Image from "next/image";
import Link from "next/link";

export default function ButtonShare() {
  return (
    <div className=" absolute top-4 right-4">
      <button className="bg-black text-white p-2 rounded-full hover:bg-green-700">
        ୯ Share
      </button>
    </div>
  );
}
