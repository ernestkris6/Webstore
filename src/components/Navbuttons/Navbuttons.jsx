import React from 'react';
import { filteredProducts } from '../../Features/Slices/ProductSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


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

    const dispatch = useDispatch();

  return (
    <div>
        <div className='flex items-center justify-center py-8'>
            {buttons.map((button, index) => {
                return (
                    <div key={index} className='mr-4'>
                      <Link to={"/filteredproducts/" + button}>
                      <button className='bg-black text-lg
                      text-white p-4 font-inter hover:bg-green-400 rounded-2xl'
                      
                      onClick={()=> dispatch(filteredProducts(button))}>
                        {button}</button>
                      </Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Navbuttons;