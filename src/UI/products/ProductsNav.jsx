import "./ProductsNav.css";
const ProductsNav = () => {
  return (
    <div id="productsnav" className="w-[500px] flex justify-around text-white absolute bg-slate-500">
      <div className="flex flex-col">
        <a href="#">T-Shirts</a>
        <a href="#">Shoes</a>
        <a href="#">Slipper</a>
      </div>{" "}
      <div className="flex flex-col">
        <a href="#">Phone</a>
        <a href="#">Computer</a>

      </div>{" "}
      <div className="flex flex-col">
        <a href="#">Sweet Shirts</a>
        <a href="#">Jackets</a>
        <a href="#">Coats</a>
        <a href="#">Trousers</a>
      </div>
    </div>
  );
};

export default ProductsNav;
