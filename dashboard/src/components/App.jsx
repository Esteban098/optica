import React from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import Sidebar from "./Sidebar";
import ButtonHiddenMenu from "./ButtonHiddenMenu";

import Products from "./Products";
import Categories from "./Categories";
import Users from "./Users";
import Orders from "./Orders";
import DetailProducts from "./DetailsProducts";
import DetailOrder from "./DetailOrder";
import DetailUser from "./DetailUser";
import Home from "./Home";
import About from "./About";

export default function App() {
  function hiddenNavbar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    sidebar.classList.toggle("activeSidebar");
    content.classList.toggle("activeContent");
  }
  return (
    <>
      <Sidebar />
      <div className="page-content p-2" id="content">
        <ButtonHiddenMenu hiddenNavbar={hiddenNavbar} />
        <div className="separator"></div>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<DetailUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<DetailProducts />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<DetailOrder />} />
        </Routes>
      </div>
    </>
  );
}
