import { useState } from "react";
import "./App.css";
import Homepage from "./components/home/Homepage";
import Login from "./components/login/login";
import Sidebar from "./UI/sidebar/Sidebar";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [sideBarControl, setSideBarControl] = useState(false);
  const [sideItems, setSideItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="relative">
      {!isLogin ? (
        <Login setIsLogin={setIsLogin}></Login>
      ) : (
        <Homepage
          setSideItems={setSideItems}
          setSideBarControl={setSideBarControl}
          sideBarControl={sideBarControl}
          cartCount={cartCount}
          setCartCount={setCartCount}
        ></Homepage>
      )}
      {sideBarControl ? (
        <Sidebar
          setSideItems={setSideItems}
          sideItems={sideItems}
          sideBarControl={sideBarControl}
          setSideBarControl={setSideBarControl}
          setCartCount={setCartCount}
          cartCount={cartCount}
        ></Sidebar>
      ) : null}
    </div>
  );
}

export default App;
