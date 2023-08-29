import React from 'react'

const CartAmountToggle = ({amount,setDecrease, setIncrease}) => {
  return (
    <div className="toggleamount flex">
        <button className='bg-blue-200 w-5' onClick={()=>setIncrease()} >+</button>
    <div className='w-6 text-center'>{amount}</div>    
        <button className='bg-blue-200 w-5' onClick={()=>setDecrease()}>-</button>
    </div>
  )
}

export default CartAmountToggle