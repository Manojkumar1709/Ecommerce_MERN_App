import React, { useState } from "react";
import loginImg from "../assest/login_signup.jpg";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const userData = useSelector((state) => state);

  const dispatch = useDispatch();
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const dataRes = await fetchData.json();
      toast(userData.user.firstName + " " + dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate("/");
        }, 500);
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
          <h2 className="text-4xl text-white font-bold text-center">LOG IN</h2>
          <div className="flex flex-col text-white py-2">
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
          <div className="text-white">
            <label htmlFor="password">Password</label>
            <div className="flex px-2 py-2 bg-gray-700 rounded-lg mt-1 mb-2 focus-outline-none focus:bg-gray-500 ">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className=" w-full bg-gray-700 border-none outline-none "
                value={data.password}
                onChange={handleOnChange}
              />
              <span
                className="flex text-xl cursor-pointer"
                onClick={handleShowPassword}
              >
                {showPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>
          </div>

          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Login
          </button>

          <p className="text-sm mt-4 text-gray-400">
            Don't have an account ?{" "}
            <Link to={"/signup"} className="text-teal-500 underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
