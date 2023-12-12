const Cartproducts = ({ id, title, price,sideItems ,setSideItems,cartCount,setCartCount}) => {
  return (
    <div className="flex relative justify-between items-center border-b pe-10 border-b-black text-white px-10">
      <div>
        <span>{title}</span>
      </div>
      <span>{price}₺</span>
      <div className="absolute right-[5px] hover:bg-red-800 top-[-2px] bg-red-600 rounded-full px-1 text-black font-extrabold">
        <button onClick={()=>{
          setCartCount(cartCount-1);
            let arr=sideItems.filter(temp=>temp.id!==id);
            setSideItems(arr);
        }}>X</button>
      </div>
    </div>
  );
};

export default Cartproducts;
