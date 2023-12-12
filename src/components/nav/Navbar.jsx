import ProductsNav from "../../UI/products/ProductsNav";
import Categories from "../../UI/categories/Categories";
import "./nav.css";

const Navbar = ({ cartCount, setSideBarControl, sideBarControl }) => {
  return (
    <nav className="flex justify-around items-center sticky top-0">
      <h1>SCB</h1>
      <div className="flex gap-10">
        <div id="products" className="relative">
          <a href="#">
            Product <i className="fa-solid fa-chevron-down"></i>
          </a>
          <div>
            <ProductsNav></ProductsNav>
          </div>
        </div>
        <div id="categories" className="relative">
          <a href="#">
            Categories <i className="fa-solid fa-chevron-down"></i>
          </a>
          <div>
            <Categories></Categories>
          </div>
        </div>
        {cartCount === 0 ? null : (
          <div
            onClick={() => {
    

              setSideBarControl(!sideBarControl);
            }}
            className="relative"
          >
            <button>
              <i className="fa-solid fa-basket-shopping"></i>
            </button>
            <div className="absolute right-[-10px] top-[-10px]">
              <span className="font-extrabold text-[15px]">{cartCount}</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
