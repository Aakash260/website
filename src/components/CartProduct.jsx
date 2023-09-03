import React ,{useState} from 'react'
import CartAmountToggle from './CartAmountToggle'
import { useCartContext } from '../context/cart_context';
const CartProduct = ({id,name,color,amount,image,price}) => {
     const {removeItem,setIncrease,setDecrease} =useCartContext();
   
    const formatToIndianCurrency = (number) => {
        const formatter = new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumFractionDigits:2
        });
      
        return formatter.format(number/100);
      };

    

  return (
    <div className='flex m-4 gap-4 '>
    <div className="w-2/5">  
            <div className="w-20">
              <img className="h-24" src={image} alt=""/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{name}</span>
              <div className='text-sm'>Color:<span className="font-bold text-sm rounded-full" style={{backgroundColor:color ,color:color}}>C</span></div>
             
              <button className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={()=>removeItem(id)}>Remove</button>
            </div>
          </div>
          <div className=" w-1/5">
            <CartAmountToggle  amount={amount} setIncrease={()=>setIncrease(id)} setDecrease={()=>setDecrease(id)}  />
     
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">{formatToIndianCurrency(price)}</span>
          <span className="text-center w-1/5 font-semibold text-sm">{formatToIndianCurrency(price*amount)}</span>
    </div>
  )
}

export default CartProduct