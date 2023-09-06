import React, { useState } from "react";
import logo from "../assest/logo.gif";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout Successfully");
  };

  const cartItemNumber = useSelector((state) => state.product.cartItem);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-500">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to={""} className="text-white">
          <div className="h-10">
            <img src={logo} alt="Logo" className="h-full" />
          </div>
        </Link>

        <nav className="hidden md:flex space-x-6 text-white">
          <Link to={""}>Home</Link>
          <Link to={"menu/64d60bc8bddd10d904a4698d"}>Menu</Link>
          <Link to={"about"}>About</Link>
          <Link to={"contact"}>Contact</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to={"cart"} className="text-white relative">
            <BsCartFill className="text-2xl" />
            <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white w-4 h-4 rounded-full text-center text-sm">
              {cartItemNumber.length}
            </div>
          </Link>

          <div
            className="relative cursor-pointer text-white"
            onClick={handleShowMenu}
          >
            <div className="text-2xl">
              {userData.img ? (
                <img
                  src={userData.img}
                  alt="Login"
                  className="h-10 w-10 rounded-full overflow-hidden shadow-md"
                />
              ) : (
                <HiOutlineUserCircle className="h-10 w-10" />
              )}
            </div>
            {showMenu && (
              <div className="absolute top-12 right-0 bg-white  py-2 shadow rounded-lg w-32 text-center">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newproduct"}
                    className="block px-4 py-2 hover:bg-gray-300 text-black"
                  >
                    New Product
                  </Link>
                )}

                {userData.img ? (
                  <p
                    className="block px-4 py-2 hover:bg-gray-300 text-black cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="block px-4 py-2 text-black hover:bg-gray-300"
                  >
                    Login
                  </Link>
                )}

                <nav className="md:hidden">
                  <Link to={""} className="block px-4 py-2">
                    Home
                  </Link>
                  <Link
                    to={"menu/64d60bc8bddd10d904a4698d"}
                    className="block px-4 py-2"
                  >
                    Menu
                  </Link>
                  <Link to={"about"} className="block px-4 py-2">
                    About
                  </Link>
                  <Link to={"contact"} className="block px-4 py-2">
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
