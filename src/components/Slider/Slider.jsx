import React from 'react';
import { nextSlide, prevSlide, dotSlide } from '../../Features/Slices/SliderSlice';
import { useSelector, useDispatch } from 'react-redux';
import { SliderData } from '../../assets/Data/Data';


const Slider = () => {

  const slideIndex = useSelector((state) => state.slider.value)
  console.log("slideIndex", slideIndex);

  const dispatch = useDispatch()

  return (
    <div>
        <div className='relative pb-4'>
            <div>
             {SliderData.map((slide) => {
                  return <div key={slide.id} className={parseInt(slide.id) === slideIndex ? "opacity-100 duration-200 ease-in-out scale-100" 
                  : "opacity-0 duration-200 ease-in-out scale-95"}>
                    <div>
                      {parseInt(slide.id) === slideIndex && (
                          <img className='h-[650px] w-full' src={slide.img} alt='shoes'/>
                      )}
                    </div>
                    <div className='absolute top-44 mx-auto inset-x-1/4'>
                      <p className='text-white text-4xl font-inter font-bold tracking-normal leading-none'> 
                      {parseInt(slide.id) === slideIndex && slide.text}</p>
                    </div>
                  </div>
             })}
            </div>
        </div>
        <div className='flex absolute bottom-14 left-[45%]'>
              {SliderData.map((slide, index) => {
                return (
                  <div className='m-4' key={index}>
                      <div className={index === slideIndex ? 
                      "bg-green-300 rounded-full p-4 cursor-pointer" 
                      : "bg-white rounded-full p-4 cursor-pointer"}
                      onClick={() => dispatch(dotSlide(index))}></div>
                  </div>
                )
              })}
        </div>
        <button className='absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300' onClick={()=> dispatch(nextSlide(slideIndex + 1))}>
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="w-6 h-6">
          <path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        </button>
        <button className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300" onClick={()=> dispatch(prevSlide(slideIndex - 1))}>
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" 
          class="w-6 h-6">
  <       path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        </button>
    </div>
  )
}

export default Slider; 