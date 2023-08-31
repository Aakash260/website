import React from 'react'

const filterreducer = (state, action) => {

   switch (action.type) {
      case "Load_filter_products":
         return {
            ...state,
            all_products: [...action.payload],
            filter_products: [...action.payload]
         }

      case "SETgrid_view":
         return {
            ...state,
            grid_view: true
         }
      case "SETlist_view":
         return {
            ...state,
            grid_view: false
         }
      case "Sorted_value":
         return {
            ...state,
            sorting_value: action.payload,
         }
      case "SORTING_PROD":
         {
            let newSort;
            let tempdata = [...action.payload];

            switch (state.sorting_value) {
               case "a-z":
                  newSort = tempdata.sort((a, b) => a.name.localeCompare(b.name))
                  return {
                     ...state,
                     filter_products: newSort,
                  }
               case "z-a":
                  newSort = tempdata.sort((a, b) => b.name.localeCompare(a.name))
                  return {
                     ...state,
                     filter_products: newSort,
                  }

               case "lowest": {
                  function sortFromLowest(a, b) {
                     return a.price - b.price;
                  }
                  newSort = tempdata.sort(sortFromLowest)
                  return {
                     ...state,
                     filter_products: newSort,
                  }
               }
               case "highest": {
                  function sortFromHigh(a, b) {
                     return b.price - a.price
                  }
                  newSort = tempdata.sort(sortFromHigh)
                  return {
                     ...state,
                     filter_products: newSort,
                  }
               }
               default:
                  return {
                     ...state,
                     filter_products: tempdata
                  }
            }
         }
      case "input_search_value":
         const { name, value } = action.payload;
         return {
            ...state,
            filters: {
               ...state.filters,
               [name]: value
            }
         }
      case "FilterData":

         let { all_products } = state;
         let tempFilter = [...all_products];

         const { text, category, company } = state.filters;

         if (text) {
            tempFilter = tempFilter.filter((item) => {
               return item.name.toLowerCase().includes(text);
            })
         }


         if (category!='all') {
            tempFilter = tempFilter.filter((item) => {
               return item.category === category;
            })

         }

         if (company!='all') {
            tempFilter = tempFilter.filter((item) => {
               return item.company.toLowerCase() === company.toLowerCase();
            })
         }
         return {
            ...state,
            filter_products: tempFilter
         }
      default:
         state

   }


}

export default filterreducer