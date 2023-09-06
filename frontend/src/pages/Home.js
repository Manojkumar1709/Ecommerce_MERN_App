import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardFeature from "./../components/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
import AllProduct from "../components/AllProduct";
import ImageSlider from "../components/ImageSlider";
import "../App.css";

function Home() {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartListLaptop = productData.filter(
    (el) => el.category === "laptop"
  );

  const loadingArrayFeature = new Array(10).fill(null);

  const slideProduct = useRef();
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = ["Your Home", "Your Office", "Your College"];
  const colors = ["text-orange-500", "text-blue-500", "text-green-500"];

  const nextProduct = () => {
    slideProduct.current.scrollLeft += 200;
    changeTextAndColor();
  };

  const preveProduct = () => {
    slideProduct.current.scrollLeft -= 200;
    changeTextAndColor();
  };

  const changeTextAndColor = () => {
    setTextIndex((prevIndex) =>
      prevIndex === textOptions.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeTextAndColor();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [buttonColor, setButtonColor] = useState("bg-orange-300");

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const colors = ["bg-orange-300", "bg-blue-300", "bg-green-300"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      setButtonColor(randomColor);
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-orange-200 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Fast Delivery</p>
            <div id="box">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
                alt="bike_img"
                className="h-7"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold md:text-7xl py-3">
            The Fastest Delivery in{" "}
            <span
              className={`${colors[textIndex]} text- transition-all ${
                textIndex === 0 ? "slide-out" : "slide-in"
              }`}
            >
              {textOptions[textIndex]}
            </span>
          </h2>
          <p className="py-3 text-base">
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on components.
          </p>
          <button
            className={`font-bold ${buttonColor} px-4 py-1 rounded-md transition-transform transform hover:scale-105 hover:bg-orange-400 hover:shadow-md`}
          >
            Order Now
          </button>
        </div>

        <div>
          <ImageSlider />
        </div>
      </div>
      <div className="my-10">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">Laptops</h2>
          <div className="ml-auto flex gap-4">
            <button
              className="bg-slate-300 hover:bg-slate-400 text-md p-2 rounded transition duration-300 ease-in-out"
              onClick={preveProduct}
            >
              <GrPrevious />
            </button>
            <button
              className="bg-slate-300 hover.bg-slate-400 text-md p-2 rounded transition duration-300 ease-in-out"
              onClick={nextProduct}
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-10 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProduct}
        >
          {homeProductCartListLaptop[0]
            ? homeProductCartListLaptop.map((el) => {
                return (
                  <CardFeature
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    img={el.img}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardFeature key={index} loading="Loading..." />
              ))}
        </div>
      </div>
      <AllProduct heading={"All Product"} />
    </div>
  );
}

export default Home;
