import React from "react";
import { AiFillFilter } from "react-icons/ai";

export const FilterProduct = ({ category, onClick, isActive }) => {
  const containerClass = `text-xl w-14 h-14 flex items-center justify-center rounded-full cursor-pointer ${
    isActive ? "bg-orange-500 text-white" : "bg-yellow-400"
  }`;

  return (
    <div onClick={onClick} className="text-center">
      <div className={containerClass}>
        <AiFillFilter />
      </div>
      <p className="font-medium my-1 capitalize">{category}</p>
    </div>
  );
};


