import "./Categories.css";
const ProductsNav = () => {
  return (
    <div id="catenav" className="w-[500px] flex justify-center text-white absolute bg-slate-500">
      <div className="flex justify-around gap-10">
        <a href="#">Male</a>
        <a href="#">Female</a>
        <a href="#">Children</a>
        <a href="#">Pet</a>
      </div>

    </div>
  );
};

export default ProductsNav;
