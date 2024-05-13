import Image from "next/image";
import Link from "next/link";

export default function BubbleChiori() {
  return (
    <div className="fixed">
      <div className="flex items-center h-[130vh] ml-[15%]">
        <Image src="/images/chiori.png" width={600} height={700} alt="chiori" />

        <div className="fixed animate-pulse text-3xl left-[6%] top-[10%] font-bold border-4 border-black rounded-full px-8 py-4 text-center bg-red-400 italic">
          I'm Chiori,<br></br>a cloth designer in Fontaine.<br></br>Tell me your
          design idea.
        </div>
      </div>
    </div>
  );
}
