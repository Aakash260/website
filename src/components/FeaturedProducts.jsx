import React from 'react'
import { useProductContext } from '../context/productcontext'
import FeatureProduct from './FeatureProduct';
const FeaturedProducts = () => {
    const { isLoading, featureProducts } = useProductContext();

    if (isLoading) {
        // shimmering effect
        return  <i class="fa-solid fa-spinner fa-shake"></i>
    }

    return (
        <div className="featured ">
            <h2 className='text-4xl'>Our Services</h2>
            <h3 className='text-2xl'>Have a look 👀</h3>
            <div className="featur_container p-10 flex-row  md:flex md:gap-5">
              
                {featureProducts.map((item)=>{
                        return  <FeatureProduct key={item.id} {...item}/>
                    })}
            </div>
        </div>
    )
}

export default FeaturedProducts