import React from 'react'
import {NavLink} from 'react-router-dom'
const Gridviewlist = (item) => {
   const {id,name,image,price,category}=item;
   
   const formatToIndianCurrency = (number) => {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits:2
    });

    return formatter.format(number/100);
  };

  return (
    <NavLink to={`/singleproducts/${id}`}>
    <div className="feature1 relative overflow-hidden">
     <div className="flex items-center">
                      
             <img className='py-5 md:py-[0] w-100% h-40' src={image} alt="phone" />
             <div className="infoproduct md:ml-10">
                 {name.charAt(0).toUpperCase()+name.slice(1)} {category.charAt(0).toUpperCase()+category.slice(1)} {formatToIndianCurrency(price)}
             </div>
             <div className="contenthover bg-gray-500/[0.5] absolute top-0  w-[100%] h-[100%] flex justify-center items-center left-[-100%] transition-all 0.5s  ">
                 Grab It
             </div>
     </div>
     <span><button className=' bg-blue-400 px-4'>ReadMore</button></span>
</div>
</NavLink>
  )
}

export default Gridviewlist