import React from 'react'
import { useFilterContext } from '../context/filtercontext'
const SearchSection = () => {
 
  const {filters:{text,category},all_products, input_search}=useFilterContext()
 
const getUnique=(data,property)=>{

  let newVal=data.map((item)=>{
    return item[property]
  })
  return (['all',...new Set(newVal)])
}

const getUniqueCompany=(data,property)=>{

  let newVal=data.map((item)=>{
    return item[property]
  })
  return (['all',...new Set(newVal)])
}

    const categoryData=getUnique(all_products,"category")

    const companyData=getUniqueCompany(all_products,'company')
   return (
    <div className="searchsection">
      <div className="grid">
        <form className="search relative" onSubmit={(e)=>e.preventDefault()}>
          <input type="text" className='border border-black mt-2 w-full md:mr-4' placeholder='search...' onChange={input_search} value={text} name='text' />
          <div className='absolute top-2 right-0'>🔍</div>
        </form>
        <div className="category">
          <h3 className='text-center my-2'>Category</h3>
          <div className="category_container grid col-span-1">
          {
            categoryData.map((item,index)=>{
              return <button key={index}
            type='button'
            name='category'
            value={item}
            onClick={input_search} >{item.toUpperCase()}</button>
            })
          }

          </div>
        </div>

        <div className="companyCategory">
        <h3 className='text-center my-2'>Company</h3>
          <div className="category_container grid col-span-1">
          {
            companyData.map((item,index)=>{
              return <button key={index}
            type='button'
            name='company'
            value={item}
            onClick={input_search} >{item.toUpperCase()}</button>
            })
          }

          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchSection