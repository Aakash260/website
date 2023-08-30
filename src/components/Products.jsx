import React from 'react'
import SearchSection from './SearchSection'
import ProductDisplay from './ProductDisplay'
const products = () => {
  return (
    <div className='mt-16'>
<div className="container grid  md:grid-cols-6 gap-1 p-10">
  <div className="searchSection  md:col-span-1  border-2 border-black px-10">
 <SearchSection/>
  </div>
  
  <div className="productdisplay md:col-span-5  border-2 border-black">
 
  <ProductDisplay/>
  </div>
</div>

    </div>
  )
}

export default products