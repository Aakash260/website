import React from 'react'
import SearchSection from './SearchSection'
import ProductDisplay from './ProductDisplay'
const products = () => {
  return (
    <div className='mt-16'>
<div className="container grid grid-cols-3  md:grid-cols-6 gap-1 p-10">
  <div className="searchSection col-span-1  md:col-span-1  ">
 <SearchSection/>
  </div>
  
  <div className="productdisplay col-span-2 md:col-span-5 ">
 
  <ProductDisplay/>
  </div>
</div>

    </div>
  )
}

export default products