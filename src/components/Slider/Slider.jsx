import React from 'react';
import hero from '../../assets/shoe4.jpg';

import { nextSlide, prevSlide, dotSlide } from '../../Features/Slices/SliderSlice';
import { useSelector, useDispatch } from 'react-redux';


const Slider = () => {

  const slideIndex = useSelector((state) => state.slider.value)
  console.log("slideIndex", slideIndex);

  const dispatch = useDispatch()
  return (
    <div>
        <img className='h-[550px] w-full' src={hero} alt='slider' />

        <button onClick={()=> dispatch(nextSlide(slideIndex + 1))}>Next</button> <br></br>
        <button>Previous</button>
    </div>
  )
}

export default Slider;