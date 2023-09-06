import React from "react";
import NotFoundImg from '../assest/Monster404Error.gif'

const PageNotFound = () => {
  return (
    <div className="bg-slate-100 flex justify-center items-center h-screen">
      <div className="rounded-lg border-2 border-red-300 p-1 cursor-pointer shadow-2xl">
        <img src={NotFoundImg} alt="Not Found" className="block" />
      </div>
    </div>
  );
};

export default PageNotFound;
