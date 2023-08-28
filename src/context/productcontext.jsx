import {createContext,useContext,useEffect,useReducer} from 'react'
import axios from 'axios'
import reducer from '../reducers/ProductReducers'
const AppContext=createContext();
const API="https://api.pujakaitem.com/api/products"
const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{}
}

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    //using axios get API data
    const getProducts= async(url)=>{
        dispatch({type:'Loading_Data'})
       try {
         const res=await axios.get(url);
         const products=await res.data;
        dispatch({type:'SetProducts',payload:products})
       } catch (error) {
        dispatch({type:'API_ERROR'})
       }
    }
//get single product api
const getSingleProduct=async(url)=>{
    dispatch({type:'SingleDataLoading'})
    try {
        const res= await axios.get(url);
        const product=await res.data;
        dispatch({type:'SetSingleProducts',payload:product})
    } catch (error) {
        dispatch({type:'SingleAPI_ERROR'})
    }
}


    useEffect(() => {
        getProducts(API);
    }, [])
 
    return <AppContext.Provider value={{...state,getSingleProduct}}>
        {children}
        </AppContext.Provider>
}


//custom hook
const useProductContext=()=>{
    return useContext(AppContext)
}

export {AppProvider,AppContext,useProductContext}