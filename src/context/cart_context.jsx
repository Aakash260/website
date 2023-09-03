import { createContext, useContext,useReducer,useEffect } from "react";
import reducer from '../reducers/cart_reducers'
const CartContext=createContext();

const getlocalCart=()=>{
       let newCart=localStorage.getItem('mycart');
    // if(newCart===[]){
    //     return []
    // }else{
    //     return JSON.parse(newCart)
    // }
    const parseData=JSON.parse(newCart)
    if(!Array.isArray(parseData)) return [];
    return parseData
}

const initialState={
cart:getlocalCart(),
total_item:"",
total_price:"",
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

const setIncrease=(id)=>{
    dispatch({type:'setIncrease',payload:id})
}

const setDecrease=(id)=>{
    dispatch({type:'setDecrease',payload:id})
} 



useEffect(() => {
    dispatch({type:'Total_item'})
    dispatch({type:'Total_price'})
    localStorage.setItem('mycart',JSON.stringify(state.cart))
  }, [state.cart])
  

return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setIncrease,setDecrease}}>
    {children}
    </CartContext.Provider>
}

const useCartContext=()=>{
    return useContext(CartContext)
}

export {CartProvider,useCartContext}