import React, { useRef, useState } from "react";

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copySuccess, setCopySuccess] = useState("");
  const textRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = async () => {
    if (textRef.current) {
      try {
        await navigator.clipboard.writeText(textRef.current.textContent || "");
        setCopySuccess("copied!");
      } catch (err) {
        setCopySuccess("copy failed: unable to find text content");
      }
    } else {
      setCopySuccess("复制失败: 无法找到文本内容");
    }
  };

  return (
    <div className="relative p-6 bg-amber-50 rounded-lg shadow-lg max-w-full w-auto h-auto">
      <div className="bg-amber-500 text-white p-2 rounded-t-lg flex justify-end mb-4">
        <button
          onClick={copyToClipboard}
          className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 rounded"
        >
          copy♥
        </button>
      </div>
      <div ref={textRef} className="break-words">
        {code}
      </div>
      {copySuccess && <div className="mt-2 text-green-500">{copySuccess}</div>}
    </div>
  );
};

export default CodeBlock;
