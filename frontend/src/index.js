import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";
import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="menu/:filterby" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="newproduct" element={<NewProduct />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="success" element={<Success />} />
        <Route path="cancel" element={<Cancel />} />
      </Route>

      <Route path="/*" element={<PageNotFound />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
