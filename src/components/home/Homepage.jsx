import { useState } from "react";
import Footer from "../footer/Footer";
import Products from "../productsfolder/Products.jsx";
import Navbar from "../nav/Navbar";
import Hero from "../header/Hero.jsx";
const Homepage = ({sideBarControl,setSideBarControl,setSideItems,cartCount,setCartCount}) => {
  return (
    <>
      <Navbar sideBarControl={sideBarControl} setSideBarControl={setSideBarControl} cartCount={cartCount}></Navbar>
      <Hero></Hero>
      <Products setCartCount={setCartCount} setSideItems={setSideItems} cartCount={cartCount}></Products>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
