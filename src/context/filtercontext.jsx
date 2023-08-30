import { createContext,useContext, useReducer,useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducers/filterreducer";
const FilterContext=createContext();

const initialState={
    all_products:[],
filter_products:[],
grid_view:false,
sorting_value:"lowest"
}


const FilterProvider=({children})=>{


const {products}=useProductContext();
// console.log("🚀 ~ file: filtercontext.jsx:8 ~ FilterProvider ~ products:", products)
const [state,dispatch]=useReducer(reducer,initialState);

const set_gridview=()=>{
    dispatch({type:"SETgrid_view"})
}
const set_listview=()=>{
    dispatch({type:"SETlist_view"})
}

const sorting=()=>{
    dispatch({type:"Sorted_value"})
}
//sorting from all product 
useEffect(() => {
   dispatch({type:'SORTING_PROD',payload:products})
// console.log('hi')
}, [state.sorting_value])


useEffect(() => {
dispatch({type:"Load_filter_products",payload:products})
}, [products])


return <FilterContext.Provider value={{...state,set_gridview,set_listview,sorting}}>
    {children}
</FilterContext.Provider>

}

 const useFilterContext=()=>{
return useContext(FilterContext)
}

export {useFilterContext,FilterContext,FilterProvider}