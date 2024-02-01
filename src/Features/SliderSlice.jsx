import { createSlice, configureStore } from '@reduxjs/toolkit';


export const sliderSlice = createSlice({
    name : "slider",
    value : 0,
    length : 4
},
reducers = {
    nextSlider(state, actions){

    },
    prevSlider(state, actions){},
    dotSlider(state, actions){}
})

export const {nextSlider, prevSlider, dotSlider} = sliderSlice.actions;
export default sliderSlice.reducer;


