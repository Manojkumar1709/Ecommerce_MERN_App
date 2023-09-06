import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BsCloudUpload } from "react-icons/bs";
import ImageToBase64 from "./../utility/ImageToBase64";

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    img: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImageToBase64(e.target.files[0]);
    setData((preve) => {
      return {
        ...preve,
        img: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, img, category, price, description } = data;

    if (name && img && category && price && description) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();
      toast(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          img: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("All fieds required");
    }
  };
  return (
    <div className="p-10 bg-gray-300 w-full">
      <form
        className="max-w-[500px] w-full mx-auto rounded-lg bg-gray-800 p-8 px-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col text-white">
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          placeholder="Enter the product name"
          className="rounded-lg bg-gray-700 mt-2 p-2 focus:outline-none"
          onChange={handleOnChange}
          value={data.name}
        />
        </div>

        <div className="flex flex-col text-white my-3">
        <label htmlFor="category">Category</label>
        <select
          className="rounded-lg bg-gray-700 mt-2 p-2 focus:outline-none cursor-pointer"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>select category</option>
          <option value={"mobiiles"}>Mobiles</option>
          <option value={"laptop"}>Laptops</option>
          <option value={"ram"}>RAM</option>
          <option value={"harddisk"}>Hard Disk(HDD)</option>
          <option value={"ssd"}>SSD</option>
          <option value={"table"}>Latop Tables</option>
          <option value={"watch"}>Watch</option>
          <option value={"mouse"}>Mouse</option>
          <option value={"keyboard"}>Key Board</option>
          <option value={"airpods"}>Air Pods</option>
        </select>
        </div>

       <div className="flex flex-col text-white my-3">
       <label htmlFor="image">
          Image
          <div className="h-40 w-full bg-gray-600 my-2 flex items-center justify-center cursor-pointer rounded-lg">
            {data.img ? (
              <img src={data.img} className="h-full" alt="Login" />
            ) : (
              <span className="text-5xl">
                <BsCloudUpload />
              </span>
            )}

            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>
       </div>

       <div className="flex flex-col text-white my-3">
       <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type={"text"}
          className="rounded-lg bg-gray-700 mt-2 p-2 focus:outline-none"
          name="price"
          placeholder="Enter the price"
          onChange={handleOnChange}
          value={data.price}
        />
       </div>

        <div className="flex flex-col text-white my-3">
        <label htmlFor="description">Description</label>
        <textarea
          rows={3}
          value={data.description}
          className="rounded-lg bg-gray-700 mt-2 p-2 focus:outline-none"
          name="description"
          placeholder="Enter the description of product"
          onChange={handleOnChange}
        ></textarea>
        </div>

        <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Newproduct;
