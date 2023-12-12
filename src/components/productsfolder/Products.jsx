import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
const products = ({cartCount,setCartCount,sideItems,setSideItems}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/product");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error.message);
      }
    };
    fetchData();
  }, []);
  return <div className="flex justify-center gap-10 border-t-black border pt-10">
    {products.map((data,index)=><Product sideItems={sideItems} setSideItems={setSideItems} cartCount={cartCount} setCartCount={setCartCount} url={data.img} title={data.name}  price={data.price} key={index}></Product>)}
  </div>;
};

export default products;
