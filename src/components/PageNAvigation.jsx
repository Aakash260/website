import React from 'react'

const PageNAvigation = ({title,description,stars,price,stock} ) => {
    const formatToIndianCurrency = (number) => {
        const formatter = new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumFractionDigits:2
        });
    
        return formatter.format(number/100);
      };
  return (
      
      <>
      <div className='mt-14'>{title}</div>
      
      <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Large Product Image */}
          <div className="md:col-span-2">
            <img src="big-product-image.jpg" alt="Big Product" className="w-full rounded-md shadow-md" />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4">
            <img src="product-image-1.jpg" alt="Product 1" className="w-full rounded-md shadow-md cursor-pointer" />
            <img src="product-image-2.jpg" alt="Product 2" className="w-full rounded-md shadow-md cursor-pointer" />
            <img src="product-image-3.jpg" alt="Product 3" className="w-full rounded-md shadow-md cursor-pointer" />
            <img src="product-image-4.jpg" alt="Product 4" className="w-full rounded-md shadow-md cursor-pointer" />
          </div>

          {/* Product Details */}
          <div className="p-4 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{title.toUpperCase()}</h2>
            <h3 className="stars">{stars} <span className='text-sm'>(58 customer reviews)</span></h3>
            <h4>MRP:<del>50000</del></h4>
            <h4 className="text-lg font-semibold text-blue-500">Sale Price:{formatToIndianCurrency(price)}</h4>
            <p className="text-gray-700 mb-4">
               {description.slice(0,150)}
            </p>
           <div className="grid">
            <div className="availablestock">
<h3>Avaiable</h3>
            </div>
            <div className="productid">

            </div>
            <div className="brand">

            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
      </>
    
  )
}

export default PageNAvigation