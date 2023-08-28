import React,{useEffect} from 'react'
import { useParams} from 'react-router-dom'
import {useProductContext} from '../context/productcontext'
import PageNAvigation from './PageNAvigation'
const SingleProducts = () => {
  const API="https://api.pujakaitem.com/api/products"
const {id}=useParams()
const {getSingleProduct,isSingleLoading,singleProduct} =useProductContext();
//  console.log("🚀 ~ file: SingleProducts.jsx:9 ~ SingleProducts ~ singleProduct:", singleProduct)
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
 
  return  <i class="fa-solid fa-spinner fa-shake"></i>
}
  return (<>
  
  <div className="title mt-20">{name}</div>
  
  <div className="grid grid-cols-2">
    <div className="grid1">
    <div className="md:col-span-2">
            <img src="big-product-image.jpg" alt="Big Product" className="w-full rounded-md shadow-md" />
          </div>
 
          <div className="grid grid-cols-4 gap-4">
            <img src="product-image-1.jpg" alt="Product 1" className="w-full rounded-md shadow-md cursor-pointer" />
            <img src="product-image-2.jpg" alt="Product 2" className="w-full rounded-md shadow-md cursor-pointer" />
            <img src="product-image-3.jpg" alt="Product 3" className="w-full rounded-md shadow-md cursor-pointer" />
            <img src="product-image-4.jpg" alt="Product 4" className="w-full rounded-md shadow-md cursor-pointer" />
          </div>
    </div>
    <div className="grid2">
    <div class="grid grid-cols-1 productpagedescription">
  <div class="bg-gray-200 ">{name}</div>
  <div class="bg-gray-300 "><span className='font-bold'>Rating:</span>{stars}</div>
  <div class="bg-gray-200 "><span className="font-bold">Reviews:</span>{reviews} (reviews)</div>
  <div class="bg-gray-300 "><span className='font-bold'>MRP:</span> <del>60000</del> </div>
  <div class="bg-gray-300 "><span className='font-bold'>Sale Price:</span>{formatToIndianCurrency(price)}</div>
  <div class="bg-gray-200 "><span className='font-bold'>Description:</span>{description}</div>
  <div class="bg-gray-300 "><span className='font-bold'>Availability:</span>{stock?stock:"Unavailable"}</div>
  <div class="bg-gray-200 "><span className='font-bold'> Id:</span>{alias}</div>
  <div class="bg-gray-300 "><span className='font-bold'>Brand:</span>{company}</div>
</div>  
    </div>
  </div>
  </>
    
  )
}

export default SingleProducts