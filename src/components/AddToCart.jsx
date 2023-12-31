import React, { useState } from 'react'
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
const AddToCart = ({ product }) => {
    const { id, colors, stock } = product;
const {addToCart}=useCartContext()
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    const setIncrease = () => {
        amount >= stock ? setAmount(stock) : setAmount(amount + 1)
    }
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }

    return (
        <>
            <div className="colors">
                <p>colors:{
                    colors.map((curr, idx) => {
                        return <>
                            <button className={color === curr ? " m-2 rounded-lg h-4" : "m-2 rounded-lg"}
                                key={idx}
                                style={{ backgroundColor: curr }}
                                onClick={() => setColor(curr)}
                            >
                                <span className='opacity-0'>12</span>
                            </button>
                        </>
                    })
                }</p>
            </div>
            Quantity:  <CartAmountToggle
           
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />
            <NavLink to='/cart' onClick={()=>addToCart(id, color, amount,product)}>
                <button className=" my-2 w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add To Cart
                </button>
            </NavLink>
        </>
    )
}

export default AddToCart