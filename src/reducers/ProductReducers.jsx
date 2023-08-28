 
const ProductReducers = (state, action) => {
    switch (action.type) {
        case 'Loading_Data':
            return {
                ...state,
                isLoading: true
            };

        case 'API_ERROR':
            return {
                ...state,
                isLoading: true,
                isError: true
            };

        case 'SetProducts':
            const featureData = action.payload.filter((item) => {
                return item.featured === true;
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData,
            };

        case 'API_ERROR':
            return {
                ...state,
                isLoading: true,
                isError: true
                 
            }

            case 'SingleDataLoading':
                return {
                    ...state,
                    isSingleLoading:false,
                };
                
                    case 'SetSingleProducts':
                     
                        return {
                            ...state,
                            isSingleLoading:false,
                            singleProduct:action.payload
                        };

                        case 'SingleAPI_ERROR':
                            return {
                                ...state,
                                isSingleLoading:false,
                                isError: true
                                
                            };

        default:
            return state;
    }

}

export default ProductReducers