import React,{useEffect} from 'react'
import { useParams} from 'react-router-dom'
import {useProductContext} from '../context/productcontext'
import PageNAvigation from './PageNAvigation'
import SingleImage from './SingleImage'
import Starsreview from './Starsreview'
import AddToCart from './AddToCart'
const SingleProducts = () => {
  const API="https://api.pujakaitem.com/api/products"
const {id}=useParams()
const {getSingleProduct,isSingleLoading,singleProduct} =useProductContext();
// console.log("🚀 ~ file: SingleProducts.jsx:11 ~ SingleProducts ~ singleProduct:", singleProduct)
 
const formatToIndianCurrency = (number) => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits:2
  });

  return formatter.format(number/100);
};
 const {id:alias,name,company,price,description,category,stock,stars,reviews,image}=singleProduct;
   
 
useEffect(() => {
  getSingleProduct(API+'?id='+`${id}`)
}, [])
if(isSingleLoading){
 
  return  <i className="fa-solid fa-spinner fa-shake"></i>
}
  return (<>
  
  <div className="title mt-20">{name}</div>
  
  <div className="grid grid-cols-2 py-10">
    <div className="grid1">
   <SingleImage image={image}/>
    </div>
    <div className="grid2">
    <div className="grid grid-cols-1 productpagedescription">
  <div className="bg-gray-200 ">{name}</div>
  {/* <div className="bg-gray-300 "><span className='font-bold'>Rating:</span>{stars}</div> */}
  <Starsreview stars={stars}/>
  <div className="bg-gray-200 "><span className="font-bold">Reviews:</span>{reviews} (reviews)</div>
  <div className="bg-gray-300 "><span className='font-bold'>MRP:</span> <del>60000</del> </div>
  <div className="bg-gray-300 "><span className='font-bold'>Sale Price:</span>{formatToIndianCurrency(price)}</div>
  <div className="bg-gray-200 "><span className='font-bold'>Description:</span>{description}</div>
  <div className="bg-gray-300 "><span className='font-bold'>Availability:</span>{stock?stock:"Unavailable"}</div>
  <div className="bg-gray-200 "><span className='font-bold'> Id:</span>{alias}</div>
  <div className="bg-gray-300 "><span className='font-bold'>Brand:</span>{company}</div>
  <hr className='w-full bg-black mt-2 h-1 ' />
  {stock>0 && <AddToCart product={singleProduct}/>}
</div>  
    </div>
  </div>
  </>
    
  )
}

export default SingleProducts