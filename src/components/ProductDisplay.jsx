import React from 'react'
import { useFilterContext } from '../context/filtercontext'
import FeatureProduct from './FeatureProduct';
import { BsFillGrid3X2GapFill } from 'react-icons/bs'
import { BiGridVertical } from 'react-icons/bi'
import Gridviewlist from './Gridviewlist'

const ProductDisplay = () => {

  const { filter_products, grid_view, set_gridview, set_listview,sorting } = useFilterContext();
 
 

  return (
    <div className="gridContianer">
      <div className="grid">
        <div className="productpagenav flex justify-between items-center p-2">
          <div className="leftsideflex gap-2">
            <button onClick={set_gridview}><BsFillGrid3X2GapFill size={30}  /></button>
            <button onClick={set_listview}><BiGridVertical size={30} /></button>
          </div>
          <div className="totalitem">
          {`${filter_products.length +"Items"}`} 
          </div>
          <div className="searchbar relative">
            <form action="">
              <label htmlFor="sort"></label>
              <select name="sort" id="sort"
              onClick={sorting}
              >
<option value="lowest">Price-Lowest</option>
<option value="highest">Price-Highest</option>
<option value="a-z">Price(a-z)</option>
<option value="z-a">Price(z-a)</option>

              </select>
            </form>
          </div>
        </div>


        {grid_view &&
          <div className="productshows my-4  grid grid-cols-1 md:grid-cols-3 gap-4"
            
          >
            {filter_products.map((item) => {
              return <FeatureProduct key={item.id} {...item} />
            })}
          </div>
        }

        {!grid_view &&
          <div className="productshows my-4 grid gap-4"
          >
            {filter_products.map((item) => {
              return <Gridviewlist key={item.id} {...item} />
            })}
          </div>
        }

      </div>
    </div>
  )
}

export default ProductDisplay