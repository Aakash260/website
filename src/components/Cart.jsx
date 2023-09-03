 import React from 'react'
 import { Link } from 'react-router-dom'
 import CartProduct from './CartProduct'
 import { useCartContext } from '../context/cart_context'

 const Cart = () => {
  const {cart,clearCart,total_price} =useCartContext()
   
  const formatToIndianCurrency = (number) => {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits:2
    });
  
    return formatter.format(number/100);
  };
 

   return (
    <div className="container mx-auto mt-10">
    <div className=" grid md:flex shadow-md my-10">
      <div className="w-3/4 bg-white md:px-10 md:py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-1xl">Shopping Cart</h1>
          <h2 className="font-semibold text-1xl">{cart.length} Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5  ">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5  ">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5  ">Total</h3>
        </div>
        <div className="grid hover:bg-gray-100 -mx-8 px-6 py-5">
           {
cart.map((item)=>{
return <CartProduct key={item.id}{...item}/>
})
           }
        </div>

        

 {cart.length!=0 && <button onClick={clearCart} className='bg-indigo-600 px-2'>Clear Cart</button>}
        <Link to="/products" className="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </Link>
      </div>

      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">SubTotal</span>
          <span className="font-semibold text-sm">{formatToIndianCurrency(total_price)}</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>shipping fee - Free</option>
          </select>
        </div>
        <div className="py-10">
          <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>{formatToIndianCurrency(total_price)}</span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
   )
 }
 
 export default Cart