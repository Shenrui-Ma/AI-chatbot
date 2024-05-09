import Image from "next/image";
import Link from "next/link";

export default function BubbleFurina() {
  return (
    <div className="fixed">
      <div className="flex items-center h-full ml-10">
        <Image
          src="/images/Furina.png"
          width={710}
          height={1000}
          alt="Furina"
        />

        <div className="fixed animate-pulse text-3xl left-[26%] top-[25%] font-bold border-4 border-black rounded-full px-8 py-4 text-center bg-blue-300 italic">
          Pick any professor<br></br>you want,dear ~<br></br>"Don't be her..."
        </div>
      </div>
    </div>
  );
}
