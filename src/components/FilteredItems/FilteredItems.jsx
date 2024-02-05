import React from 'react'

import clothes from '../../assets/clothes.jpg';

const FilteredItems = () => {
  return (
    <div>
        <div>
            <h2 className='flex flex flex-row 
            items-center justify-center mx-auto w-[500px]
            font-inter font-bold p-2 text-lg rounded-full bg-green-300 '>
                GET YOUR ITEMS AT 
            VERY AFFORDABLE PRICES.</h2>
        </div>

        <div>
            <img className='flex flex-row mt-6 justify-center mx-auto item-center h-[600px] w-[1000px]' src={clothes} alt='filtered img' />
        </div>
    </div>
  )
}

export default FilteredItems