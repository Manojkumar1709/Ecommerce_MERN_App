import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQty, deleteCartItem, increaseQty } from "../redux/productSlice";
import { AiFillDelete } from "react-icons/ai";
import { TbPlus, TbMinus } from "react-icons/tb";

const CartProduct = ({ id, name, img, category, qty, total, price }) => {
  const dispatch = useDispatch();

  const handleIncreaseQty = () => {
    dispatch(increaseQty(id));
  };

  const handleDecreaseQty = () => {
    dispatch(decreaseQty(id));
  };

  const handleDeleteItem = () => {
    dispatch(deleteCartItem(id));
  };

  return (
    <div className="bg-slate-200 p-4 flex gap-4 rounded border border-slate-300 transition-transform hover:scale-105">
      <div className="p-3 bg-white rounded-lg overflow-hidden">
        <img src={img} className="h-36 w-48 object-cover" alt="cart_img" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div
            className="cursor-pointer text-slate-700 hover:text-orange-500"
            onClick={handleDeleteItem}
          >
            <AiFillDelete />
          </div>
        </div>
        <p className="text-slate-500 font-medium">{category}</p>
        <p className="font-bold text-base">
          <span className="text-orange-500">₹</span>
          {price}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <button
              className="bg-orange-300 py-1 rounded hover:bg-orange-400 p-1"
              onClick={handleIncreaseQty}
            >
              <TbPlus />
            </button>
            <p className="font-semibold p-1">{qty}</p>
            <button
              className="bg-orange-300 py-1 rounded hover:bg-orange-400 p-1"
              onClick={handleDecreaseQty}
            >
              <TbMinus />
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <p>Total:</p>
            <p>
              <span className="text-orange-500">₹</span>
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
