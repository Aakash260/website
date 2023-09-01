import { createContext,useContext, useReducer,useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducers/filterreducer";
const FilterContext=createContext();

const initialState={
    all_products:[],
filter_products:[],
grid_view:false,
sorting_value:"lowest",
filters:{
text:'',
category:'all',
company:'all',
colors:'all',
max_price:0,
price:0,
min_price:0
}
}


const FilterProvider=({children})=>{


const {products}=useProductContext();
  
const [state,dispatch]=useReducer(reducer,initialState);

const set_gridview=()=>{
    dispatch({type:"SETgrid_view"})
}
const set_listview=()=>{
    dispatch({type:"SETlist_view"})
}

const sorting=(event)=>{
    
    dispatch({type:"Sorted_value",payload:event.target.value})
}

const clearFilter=()=>{
    dispatch({type:"clearFilter"})
}

//sorting from all product 
useEffect(() => {
    dispatch({type:'SORTING_PROD',payload:products})
     
}, [products,state.sorting_value,])

const input_search=(event)=>{  
 let name=event.target.name;
 let value=event.target.value;
    dispatch({type:"input_search_value",payload:{name,value,}});
    dispatch({type:"FilterData",payload:products});

}


useEffect(() => {
dispatch({type:"Load_filter_products",payload:products})
}, [products])


return <FilterContext.Provider value={{...state,set_gridview,set_listview,sorting,input_search,clearFilter}}>
    {children}
</FilterContext.Provider>

}

 const useFilterContext=()=>{
return useContext(FilterContext)
}

export {useFilterContext,FilterContext,FilterProvider}