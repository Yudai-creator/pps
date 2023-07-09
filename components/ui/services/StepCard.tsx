import React from "react";

const StepCard = ({ number, resume }: { number: number; resume: string }) => {
  return (
    <div className="relative my-3 ">
      <div className="h-8 absolute w-8 -mt-5 -ml-3 rounded-full text-gray-500 flex z-50 flex-col items-center text-2xl title text-center bg-[#FFD050]">
        {number}
      </div>
      <div className="bg-gray-100 h-auto   p-4 rounded-br-2xl bottom-2 -mt-1 z-0">
        {resume}
      </div>
    </div>
  );
};

export default StepCard;
