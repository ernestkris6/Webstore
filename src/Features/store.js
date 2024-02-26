import { configureStore } from '@reduxjs/toolkit';

import sliderReducer from "../Features/Slices/SliderSlice";
import productReducer from "../Features/Slices/ProductSlice";
import cartReducer from "../Features/Slices/CartSlice";



export const store = configureStore({
    reducer : {
        "slider" : sliderReducer,
        "product" : productReducer,
        "cart" : cartReducer,
    },

});