import { createSlice, configureStore } from '@reduxjs/toolkit';

export const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        value: 0,
        length: 4,
    },
    reducers: {
        nextSlider(state, actions) {
            
        },
        prevSlider(state, actions) {},
        dotSlider(state, actions) {}
    }
})

export const {nextSlider, prevSlider, dotSlider} = createSlice.actions;
export default sliderSlice.reducer;