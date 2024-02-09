import React from 'react';

import clothes from '../../assets/clothes.jpg';

const FilteredItems = () => {

  return (
    <div>
        <div className='bg-green-300 w-[500px] mx-auto rounded-xl'>
            <h2 className='flex flex flex-row 
            items-center justify-center mx-auto w-[500px]
            font-inter font-bold p-2 text-lg rounded-full bg-green-300 '>
                GET YOUR ITEMS AT 
            VERY AFFORDABLE PRICES.</h2>
        </div>

        <div className='flex flex-row justify-center item-center py-6'>
            <img className='mx-auto rounded-xl shadow-m mb-6 item-center h-[600px] w-[70%] shadow-lg shadow-gray-700' src={clothes} alt='filtered img' />
        </div>
    </div>
  )
}

export default FilteredItems;