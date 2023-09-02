import React from 'react'

const cart_reducers = (state,action) => {
switch (action.type) {
    case 'add_to_cart':
        let {id,color,amount,product}=action.payload;
        let cartProduct;
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
    default:
        return state
        break;
}

  
}
export default cart_reducers