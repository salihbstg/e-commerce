const product = ({url,title,price,cartCount,setCartCount,setSideItems}) => {
  return (
    <div className="flex flex-col shadow-black shadow-lg w-[20%] gap-3 mb-10 border border-black p-2 rounded-xl justify-center">
      <img className="w-[100%]" src={url} alt="" />
      <h2 className="text-center text-2xl font-bold">{title}</h2>
      <p className="ps-4 font-bold">It's good product</p>
      <div className="flex justify-between items-center px-3">
        <span className="font-extrabold">{price}₺</span>
        <button onClick={()=>{
          setCartCount(cartCount+1);
          setSideItems(prevItems=>[...prevItems,{id:Math.floor(Math.random()*9857232395789),title:title,price:price}])
        }} className="bg-blue-600 px-3 py-2 text-white rounded-xl">Add to cart!</button>
      </div>
    </div>
  )
}

export default product
