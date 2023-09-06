import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/cartProduct";
import emptyCartImage from "../assest/empty.gif";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handlePayment = async () => {
    if (user.email) {
      const stripePromise = await loadStripe(
        process.env.REACT_APP_STRIPE_PUBLIC_KEY
      );
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/checkout-payment`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productCartItem),
        }
      );
      if (res.statusCode === 500) {
        return;
      }
      const data = await res.json();
      toast("Redirect to payment gateway...!");
      stripePromise.redirectToCheckout({ sessionId: data });
    } else {
      toast("You have not Login.....!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-xl font-bold text-slate-800">
          Your Cart items
        </h2>
        {productCartItem[0] ? (
          <div className="my-4 flex flex-col md:flex-row gap-2">
            <div className="w-full max-w-3xl">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    img={el.img}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                    price={el.price}
                  />
                );
              })}
            </div>
            <div className="w-full max-w-md ml-auto md:bg-gray-200 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
              <h3 className="bg-blue-500 text-white p-2 text-lg rounded-t-lg">
                Summary
              </h3>
              <div className="flex w-full py-2 text-lg border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <p>Total Qty :</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>
              <div className="flex w-full py-2 text-lg border-b-4 transition duration-300 ease-in-out hover:bg-gray-100">
                <p>Total Price :</p>
                <p className="ml-auto w-32 font-bold">
                  <span className="text-orange-500">₹</span>
                  {totalPrice}
                </p>
              </div>
              <button
                className="bg-orange-500 hover:bg-orange-600 text-lg font-bold py-2 text-white w-full rounded-b-lg transition duration-300 ease-in-out"
                onClick={handlePayment}
              >
                Make Payment
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex w-full justify-center items-center flex-col">
              <img
                src={emptyCartImage}
                className="w-full max-w-sm"
                alt="Empty_img"
              />
              <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
