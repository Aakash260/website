import React from 'react'

const cart_reducers = (state,action) => {
switch (action.type) {
    case 'add_to_cart':
        let {id,color,amount,product}=action.payload;
        let cartProduct;

let isExist=state.cart.find((currEle)=>{
   return currEle.id===id+color
})
// console.log("🚀 ~ file: cart_reducers.jsx:12 ~ isExist ~ isExist:", isExist)

if(isExist){

let update=state.cart.map((curr)=>{
    if(curr.id===id+color){
        let newAmount=curr.amount+amount;
        if(newAmount>=curr.max){
            newAmount=curr.max
        }
        return{
            ...curr,
            amount:newAmount
        }
    }else{
        return curr
    }
})
return{
    ...state,
    cart:update
}

}else{
    cartProduct={
        id:id+color,
        name:product.name,
        color,
        amount,
        image:product.image[0].url,
        price:product.price,
        max:product.stock
    }
    return {
        ...state,
        cart:[...state.cart,cartProduct]
    }
}

    
       
        case'remove_item':

        let updateCart=state.cart.filter((item)=>{
          return item.id!=action.payload;
        })
        return {
            ...state,
            cart:updateCart
        }
        
case 'clear_cart':
    return{
         ...state,
         cart:[]
    }

case 'setDecrease':
{let update = state.cart.map((curr)=>{
    if(curr.id===action.payload){
   let decamount=curr.amount-1;
   if(decamount<=1){
    decamount=1
   }
   return{
    ...curr,
    amount:decamount
   } 
    }else{
        return curr;
    }
})
return {...state,cart:update}
}

case 'setIncrease':
    {let update = state.cart.map((curr)=>{
        if(curr.id===action.payload){
       let incamount=curr.amount+1;
       if(incamount>=curr.max){
        incamount=curr.max
       }
       return{
        ...curr,
        amount:incamount
       } 
        }else{
            return curr;
        }
    })
    return {...state,cart:update}
    } 

case 'Total_item':

let updateprice=state.cart.reduce((init,curr)=>{
let {amount}=curr;
init=init+amount;
return init
},0)

return {
    ...state,
    total_item:updateprice
}

case 'Total_price':
    // let {total_price}=
    let TotalPrice=state.cart.reduce((init,curr)=>{
let {price,amount}=curr;
init=init+price*amount
return init
    },0)

    return {
        ...state,
        total_price:TotalPrice
    }
    default:
        return state
        
}

  
}
export default cart_reducers