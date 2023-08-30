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
         let userSort = document.getElementById('sort')
         let sort_value = userSort.options[userSort.selectedIndex].value;

         return {
            ...state,
            sorting_value: sort_value,
         }
      case "SORTING_PROD":
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
               newSort=tempdata.sort(sortFromLowest)
               return {
                  ...state,
                  filter_products: newSort,
               }
            }
            case "highest":{
               function sortFromHigh(a, b) {
                  return b.price-a.price
                }
                newSort= tempdata.sort(sortFromHigh)
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


      default:
         return state;
   }
}

export default filterreducer