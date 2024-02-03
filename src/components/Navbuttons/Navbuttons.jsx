import React from 'react';


const Navbuttons = () => {

    const buttons = [
        "Hoodies",
        "Dresses",
        "Bags",
        "Shoes",
        "Suits",
        "T-Shirts",
        "Jeans",
        "Jackets",
    ]

  return (
    <div>
        <div className='flex items-center justify-center py-8'>
            {buttons.map((button, index) => {
                return (
                    <div key={index} className='mr-4'>
                      <button className='bg-black text-lg
                      text-white p-4 font-inter hover:bg-green-400 rounded-2xl'>
                        {button}</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Navbuttons;