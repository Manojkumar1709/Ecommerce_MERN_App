import React, { useEffect, useState } from "react";
import { FilterProduct } from "./FilterProduct";
import CardFeature from "./CardFeature";
import { useSelector } from "react-redux";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);
  const handleFilterProduct = (category) => {
    setFilterBy(category)
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };
  const loadingArrayFeature = new Array(10).fill(null);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>
      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] ? (
          categoryList.map((el) => {
            return (
              <FilterProduct
                category={el}
                key={el}
                isActive={el.toLowerCase() === filterby.toLowerCase()}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })
        ) : (
          <div className="flex justify-center items-center h-full">
            <p>Loading...</p>
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-10 my-5">
        {dataFilter[0]
          ? dataFilter.map((el) => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  img={el.img}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                />
              );
            })
          : loadingArrayFeature.map((el) => (
              <CardFeature loading="Loading..." />
            ))}
      </div>
    </div>
  );
};

export default AllProduct;
