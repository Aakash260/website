import React from 'react'
import CartAmountToggle from './CartAmountToggle'
import { useCartContext } from '../context/cart_context';
const CartProduct = ({id,name,color,amount,image,price}) => {
     const {removeItem} =useCartContext();
   
    const formatToIndianCurrency = (number) => {
        const formatter = new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumFractionDigits:2
        });
      
        return formatter.format(number/100);
      };

    //   const [amount, setAmount] = useState(1);
    //   const setIncrease = () => {
    //       amount >= stock ? setAmount(stock) : setAmount(amount + 1)
    //   }
    //   const setDecrease = () => {
    //       amount > 1 ? setAmount(amount - 1) : setAmount(1)
    //   }

  return (
    <div className='flex m-4'>
    <div class="w-2/5">  
            <div class="w-20">
              <img class="h-24" src={image} alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{name}</span>
              <div className='text-sm'>Color:<span class="font-bold text-sm rounded-full" style={{backgroundColor:color ,color:color}}>C</span></div>
             
              <button class="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={()=>removeItem(id)}>Remove</button>
            </div>
          </div>
          <div class=" w-1/5">
            <CartAmountToggle  amount={amount}
                 />
     
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">{formatToIndianCurrency(price)}</span>
          <span class="text-center w-1/5 font-semibold text-sm">{formatToIndianCurrency(price*amount)}</span>
    </div>
  )
}

export default CartProduct