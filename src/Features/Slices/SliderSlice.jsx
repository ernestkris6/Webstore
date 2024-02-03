import { createSlice, configureStore } from '@reduxjs/toolkit';

import { SliderData } from '../../assets/Data/Data';
import { act } from 'react-dom/test-utils';

export const sliderSlice = createSlice({
    name : "slider",
    initialState : {
        value : 0,
        length : SliderData.length,
    },
    reducers : {
        nextSlide(state, action){
            console.log(action, "action");
            console.log(state, "state");
            state.value = action.payload > state.length -1 ? 0 : action.payload
        },
        prevSlide(state, action){
            state.value = action.payload < 0 ? state.length -1 : action.payload
        },
        dotSlide(state, action){
            const slide = action.payload
            console.log("dot", slide);
            state.value = slide;
        }
    }
})

export const {nextSlide, prevSlide, dotSlide} = sliderSlice.actions;
export default sliderSlice.reducer;


