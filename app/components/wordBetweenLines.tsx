import React from "react";
type WordBetweenLines = {
  word: string;
};

function WordBetweenLines({ word }: WordBetweenLines) {
  return (
    <div className="font-semibold mb-8 relative flex items-center w-[80%] ">
      <div className="flex-grow h-[1px] bg-[#807979] "></div>
      <h3 className="flex-shrink text-2xl px-4 inline text-white">{word}</h3>
      <div className="flex-grow h-[1px] bg-[#807979] "></div>
    </div>
  );
}

export default WordBetweenLines;
