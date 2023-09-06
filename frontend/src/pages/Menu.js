import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AllProduct from "../components/AllProduct";
import { addCartItem } from "../redux/productSlice";

const Menu = () => {
  const navigate = useNavigate();
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  const productDisplay = productData.find((el) => el._id === filterby);
  const dispatch = useDispatch();
  const handleAddCartProduct = () => {
    dispatch(addCartItem(productDisplay));
  };
  const handleBuy = () => {
    dispatch(addCartItem(productDisplay));
    navigate("/cart");
  };
  return (
    <div className=" p-2 md:p-6">
      <div className="w-full max-w-lg bg-slate-200 mx-auto md:flex rounded-lg">
        <div className="w-48 h-48 shadow-xl overflow-hidden">
          {" "}
          {/* Increase width and height here */}
          {productDisplay ? (
            <img
              src={productDisplay.img}
              className="hover:scale-105 transition-all h-full"
              alt=""
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div className="m-3">
          {productDisplay ? (
            <>
              <h3 className="font-semibold text-slate-600 capitalize text-center text-3xl">
                {productDisplay.name}
              </h3>
              <p className="font-medium text-slate-500 capitalize text-center text-3xl">
                {productDisplay.category}
              </p>
              <p className="text-center font-bold">
                <span className="text-orange-500">₹</span>
                <span>{productDisplay.price}</span>
              </p>
            </>
          ) : (
            <p>No product data available</p>
          )}
          <div className="flex justify-center mt-5 space-x-5">
            <button
              onClick={handleBuy}
              className="font-bold bg-yellow-300 px-5 py-1 rounded-md hover:bg-yellow-500"
            >
              Buy
            </button>
            <button
              onClick={handleAddCartProduct}
              className="font-bold bg-yellow-300 px-5 py-1 rounded-md hover:bg-yellow-500"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <AllProduct heading={"Related Product"} />
    </div>
  );
};

export default Menu;
