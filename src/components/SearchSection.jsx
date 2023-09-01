import React, { Children } from 'react'
import { useFilterContext } from '../context/filtercontext'
const SearchSection = () => {
 
  const {filters:{text,category,colors,max_price,price,min_price},all_products, input_search,clearFilter}=useFilterContext()
 
const getUnique=(data,property)=>{

  let newVal=data.map((item)=>{
    return item[property]
  })
  return (['all',...new Set(newVal)])
}
 

    const categoryData=getUnique(all_products,"category")

    const companyData=getUnique(all_products,'company')
 
const commonArray=(data,property)=>{
  let newVal=data.map((item)=>{
    return item[property]
  })
  return (['all',...new Set(newVal)])
}

 

    const colorData=commonArray(all_products,'colors')
    // console.log("🚀 ~ file: SearchSection.jsx:30 ~ SearchSection ~ colorData:", colorData)
    const all_colors=([...new Set(colorData.flat())])
    
    const formatToIndianCurrency = (number) => {
      const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits:2
      });
  
      return formatter.format(number/100);
    };
 
      
   return (
    <div className="searchsection">
      <div className="grid text-sm md:place-items-center gap-2 ">
        <form className="search relative" onSubmit={(e)=>e.preventDefault()}>
          <input type="text" className='border border-black mt-2 w-full md:mr-4' placeholder='search...' onChange={input_search} value={text} name='text' />
          <div className='absolute top-2 right-0'>🔍</div>
        </form>
        <div className="category">
          <h3 className='text-center my-2'>Category</h3>
          <div className="category_container grid col-span-1 btn-group">
          {
            categoryData.map((item,index)=>{
              return  <button key={index}
                            type='button'
                            name='category'
                        className='group bg-white focus:border-b-2 border-blue-700 hover:border-b-2'
                            value={item}
                            onClick={input_search} >{item.toUpperCase()}</button>
              
            })
          }

          </div>
        </div>

        <div className="companyCategory">
        <h3 className='text-center my-2'>Company</h3>
          <div className="category_container grid col-span-1 btn-group">
          {
            companyData.map((item,index)=>{
              return <button key={index}
            type='button'
            name='company'
            className='group bg-white focus:border-b-2 border-blue-700 hover:border-b-2'
            value={item}
            onClick={input_search} >{item.toUpperCase()}</button>
            })
          }

          </div>
        </div>
        <div className="category">
          <h3 className='text-center my-2'>Colors</h3>
          <div className="category_container flex gap-2 items-center">
          {
            all_colors.map((item,index)=>{

              if(item==='all'){
                return <button key={index}
                type='button'
                name='colors'
                value={item}
                 
                onClick={input_search} >ALL</button>
              }
              return <button key={index}
            type='button'
            name='colors'
            value={item}
            className= {`${colors===item?"opacity-100":"opacity-40"} w-[8px] h-[10px] md:w-[1vw] md:h-[1vw] rounded-3xl p-1`}
            style={{backgroundColor:item}}
            onClick={input_search} ></button>
            })
          }

          </div>
        </div>
        <div className="price_category md:grid place-items-center">
          <p>Price</p>
          <h3>{formatToIndianCurrency(price)}</h3>
          <input type="range" name="price" className='w-[97px]' max={max_price} min={min_price} value={price} onChange={input_search} />
        </div>
        <div className="clearbutton" onClick={clearFilter} >
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Clear 
</button>
        </div>
      </div>
    </div>
  )
}

export default SearchSection