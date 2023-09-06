import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/productSlice";

const CardFeature = ({ img, name, price, category, loading, id }) => {
  const dispatch = useDispatch();
  const handleAddCartProduct = () => {
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        category: category,
        img: img,
      })
    );
  };
  return (
    <div className="w-64 p-4 bg-white hover:shadow-lg cursor-pointer rounded-lg transition-transform transform-gpu duration-300 hover:scale-105">
      {img ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-40 flex justify-center items-center">
              <img src={img} alt="product_image" className="h-full" />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-semibold text-slate-600 capitalize overflow-hidden overflow-ellipsis whitespace-nowrap">
                {name}
              </h3>
              <p className="mt-1 font-medium text-slate-500 capitalize">
                {category}
              </p>
              <p className="mt-1 font-bold">
                <span className="text-orange-500">₹</span>
                <span>{price}</span>
              </p>
            </div>
          </Link>
          <button
            className="mt-2 font-bold bg-yellow-300 py-1 rounded-md hover:bg-yellow-500 w-full transition-colors duration-300 ease-in-out"
            onClick={handleAddCartProduct}
          >
            Add to cart
          </button>
        </>
      ) : (
        <div className="h-40 flex justify-center items-center">
          <p className="">{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeature;
