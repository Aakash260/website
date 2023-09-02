import { createContext, useContext,useReducer,useEffect } from "react";
import reducer from '../reducers/cart_reducers'
const CartContext=createContext();

const getlocalCart=()=>{
    let newCart=localStorage.getItem('mycart');
    if(newCart===[]){
        return []
    }else{
        return JSON.parse(newCart)
    }
}

const initialState={
cart:getlocalCart(),
total_item:"",
total_amount:"",
shipping_fee:50000,
}



const CartProvider=({children})=>{

const [state, dispatch] = useReducer(reducer,initialState);

const addToCart=(id,color,amount,product)=>{
dispatch({type:'add_to_cart',payload:{id,color,amount,product}})
}
const removeItem=(id) => {
 
    dispatch({type:'remove_item',payload:id})
}

const clearCart=()=>{
    dispatch({type:'clear_cart'})
}
useEffect(() => {
    localStorage.setItem('mycart',JSON.stringify(state.cart))
  }, [state.cart])
  

return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart}}>
    {children}
    </CartContext.Provider>
}

const useCartContext=()=>{
    return useContext(CartContext)
}

export {CartProvider,useCartContext}