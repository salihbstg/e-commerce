import "./sidebar.css";
import Cartproducts from "./Cartproducts";
const Sidebar = ({
  sideBarControl,
  setSideBarControl,
  sideItems,
  setSideItems,
  setCartCount,
  cartCount,
}) => {
  return (
    <div
      id="sidebar"
      className="fixed h-screen w-[30%] top-0 bottom-0 right-0 bg-gray-500"
    >
      <button
        onClick={() => {
          setSideBarControl(!sideBarControl);
        }}
        className="float-right me-2 text-3xl"
      >
        X
      </button>
      <div className="mt-[70px] flex flex-col gap-5">
        {sideItems.map((data, index) => (
          <Cartproducts
            setCartCount={setCartCount}
            cartCount={cartCount}
            setSideItems={setSideItems}
            sideItems={sideItems}
            id={data.id}
            title={data.title}
            price={data.price}
            key={index}
          ></Cartproducts>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
