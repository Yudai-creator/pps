import Link from "next/link";
import React from "react";

const Button = (props: { text: string; link: string; type: string }) => {
  return (
    <Link href={props.link}>
      <button
        className={`${
          props.type === "primary"
            ? "bg-[#FFD050] py-3.5 hover:bg-[#cba230]"
            : "border-2 color-main-500 font-semibold hover:font-medium hover:border-gray-200 border-gray-700"
        } 
        px-8 py-3 text-base
        `}
      >
       <span className="text-gray-700" > {props.text}
        </span> 
      </button>
    </Link>
  );
};

export default Button;
