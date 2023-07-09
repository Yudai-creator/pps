import React from "react";

const Separator = () => {
  return (
    <div className="w-full h-3   flex bg-main-black-500">
      <div className="w-3/4 lg:w-1/4   lg:flex bg-primary"></div>
      <div className="w-2/4"></div>
      <div className="w-1/4 hidden lg:flex bg-primary"></div>
    </div>
  );
};

export default Separator;
