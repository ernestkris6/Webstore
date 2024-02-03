import { configureStore } from '@reduxjs/toolkit';

import sliderReducer from "../Features/Slices/SliderSlice";

export const store = configureStore({
    reducer : {
        "slider" : sliderReducer,
    },
});