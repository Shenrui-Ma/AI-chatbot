import React, { useRef, useState } from "react";

const CodeBlock = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const textRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textRef.current.innerText);
      setCopySuccess("copy success!");
    } catch (err) {
      setCopySuccess("copy failed!");
    }
  };

  return (
    <div className="relative p-4 bg-gray-100 rounded-lg shadow-lg max-w-full w-auto h-auto">
      <div className="absolute top-0 left-0 w-full bg-blue-500 text-white p-2 rounded-t-lg flex justify-end">
        <button
          onClick={copyToClipboard}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
        >
          copy♥
        </button>
      </div>
      <div
        ref={textRef}
        className="mt-8 overflow-wrap overflow-wrap break-word"
      >
        这是需要复制的文本内容。你可以在这里添加更多的文本，气泡会根据文本的长度自动调整大小。
      </div>
      {copySuccess && <div className="mt-2 text-green-500">{copySuccess}</div>}
    </div>
  );
};

export default CodeBlock;
