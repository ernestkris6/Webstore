import { createSlice, configureStore } from '@reduxjs/toolkit';


export const sliderSlice = createSlice({
    name : "slider",
    initialState : {
        value : 0,
        length : 4,
    },
    reducers : {
        nextSlide(state, actions){
    
        },
        prevSlide(state, actions){},
        dotSlide(state, actions){}
    }
})

export const {nextSlide, prevSlide, dotSlide} = sliderSlice.actions;
export default sliderSlice.reducer;


