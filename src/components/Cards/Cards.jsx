import React from 'react';

import jamb from '../../assets/Ellipse 363.png';
import cambridge from '../../assets/Ellipse 363 (1).png';
import waec from '../../assets/Ellipse 363 (2).png';
import gce from '../../assets/Ellipse 363 (3).png'

const Cards = () => {
  return (
    <div className='flex flex-row gap-28 mt-[80px] justify-center item-center'>
            
            <div>
            <img className='border-2 py-16 px-12 rounded-xl' src={jamb} alt='jamb logo' />
            <h3 className='flex text-center justify-center text-xl font-inter font-bold mt-3'>UTME 2024 Prep </h3>
            </div>
            <div>
            <img className='border-2 py-16 px-12 rounded-xl' src={cambridge} alt='cambridge logo' />
            <h3 className='flex text-center justify-center text-xl font-inter font-bold mt-3'>CAMBRIDGE </h3>
            </div>
            <div>
            <img className='border-2 py-16 px-12 rounded-xl' src={waec} alt='waec logo' />
            <h3 className='flex text-center justify-center text-xl font-inter font-bold mt-3'>WASSCE</h3>
            </div>
            <div>
            <img className='border-2 py-16 px-12 rounded-xl' src={gce} alt='jamb logo' />
            <h3 className='flex text-center justify-center text-xl font-inter font-bold mt-3'>GCE Nov/Dec </h3>
            </div>
            
    </div>
  )
}

export default Cards;