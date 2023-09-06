import React, { useState } from "react";
import loginImg from "../assest/login_signup.jpg";
import loginSignUp from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import imgToBase64 from "./../utility/ImageToBase64";
import { toast } from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    img: "",
  });
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadProfileimg = async (e) => {
    const data = await imgToBase64(e.target.files[0]);
    setData((preve) => {
      return {
        ...preve,
        img: data,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, password, confirmPassword } = data;
    if (firstName && lastName && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/signup`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const dataRes = await fetchData.json();
        toast(dataRes.message);
        navigate("/login");
      } else {
        alert("Incorrect Password");
      }
    } else {
      alert("Please enter required fields");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>
      <div className="bg-gray-600 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-800 p-8 px-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl text-white font-bold text-center my-3">SIGN UP</h2>
          <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
            <img
              src={data.img ? data.img : loginSignUp}
              alt="Signup"
              className="w-full h-full"
            />
            <label htmlFor="profileimg">
              <div className="absolute bottom-0 h-1/3  bg-teal-300 bg-opacity-50 w-full text-center cursor-pointer">
                <p className="text-sm p-1 text-white">Upload</p>
              </div>
              <input
                type={"file"}
                id="profileimg"
                accept="img/*"
                className="hidden"
                onChange={handleUploadProfileimg}
              />
            </label>
          </div>

          <div className="flex flex-col text-white">
            <label htmlFor="firstName">First Name</label>
            <input
              type={"text"}
              id="firstName"
              name="firstName"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:outline-none"
              value={data.firstName}
              onChange={handleOnChange}
            />
          </div>

          <div className="flex flex-col text-white">
            <label htmlFor="lastName">Last Name</label>
            <input
              type={"text"}
              id="lastName"
              name="lastName"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:outline-none"
              value={data.lastName}
              onChange={handleOnChange}
            />
          </div>

          <div className="flex flex-col text-white">
            <label htmlFor="email">Email</label>
            <input
              type={"email"}
              id="email"
              name="email"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:outline-none"
              value={data.email}
              onChange={handleOnChange}
            />
          </div>

          <div className="text-white py-1">
            <label htmlFor="password">Password</label>
            <div className="flex px-2 py-2 bg-gray-700 rounded-lg mt-1 mb-2 focus-outline-none focus:bg-gray-500 ">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full bg-gray-700 border-none outline-none"
                value={data.password}
                onChange={handleOnChange}
              />
              <span className="flex text-xl" onClick={handleShowPassword}>
                {showPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>
          </div>

         <div className="text-white py-1">
         <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="flex px-2 py-2 bg-gray-700 rounded-lg mt-1 mb-2 focus-outline-none focus:bg-gray-500">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-gray-700 border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span className="flex text-xl" onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
         </div>

          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Sign Up
          </button>

          <p className="text-sm mt-4 text-white">
            Already have an account ?{" "}
            <Link to={"/login"} className="text-teal-500 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
