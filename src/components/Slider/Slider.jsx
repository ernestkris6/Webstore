import React from 'react';
import hero from '../../assets/shoe4.jpg'

const Slider = () => {
  return (
    <div>
        <img className='h-[550px] w-full' src={hero} alt='slider' />

        <button>Next</button> <br></br>
        <button>Previous</button>
    </div>
  )
}

export default Slider;