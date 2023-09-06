import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ name, img, category, price, loading, id }) => {
  return (
    <div className="bg-white p-2 shadow-md rounded min-w-[150px]">
      {name ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className=" min-w-[100px] max-w-[200px]  min-h-[100px] max-h-[200px] h-40">
              <img src={img} alt="product" className="h-full w-full" />
            </div>
            <h3 className="font-semibold text-slate-600 text-center capitalize-text-lg">
              {name}
            </h3>
            <p className="font-medium text-slate-500 text-center capitalize-text-lg">
              {category}
            </p>
            <p className="text-center font-bold">
              <span className="text-orange-500">₹</span>
              <span>{price}</span>
            </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
