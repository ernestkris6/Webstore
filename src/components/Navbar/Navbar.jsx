import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import logo from '../../assets/logo.png';
import love from '../../assets/download (1).png';
import shopbag from '../../assets/download (3).png';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const totalAmount = useSelector((state) => state.cart.totalAmount)
        const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    }

    return ( 
<>
    <div className="bg-black w-full p-2">
        <h3 className="text-white font-inter text-1xl font-bold text-center lmobile:text-2xl">Welcome ALL</h3>
    </div>

    <div className="flex justify-around items-center">
        <div>
            <img className="h-28 w-full" src={logo} alt="store" />
        </div>

        <div className='flex flex-row items-center'>
            <button className='font-inter text-base font-medium text-center m-4'>Logout</button>
            <img className='w-4' src={love} alt='love icon' />
            <p className='ml-2 font-inter text-base font-medium text-center'>Wish List</p>

        <div className='flex flex-row cursor-pointer items-center'
        onClick={handleOpen}>
        {totalAmount > 0 ? <span className='rounded-full bg-gray-300 px-2 font-inter text-sm ml-3'>{totalAmount}</span> : <img className='w-4 h-4 ml-4' src={shopbag} alt='' />}
            <p className='font-inter text-base font-medium text-center ml-2'>Shopping Bag</p>
            <div> 
                {open && 
                <Cart
                 openModal={open}
                 setOpen={setOpen}
                 />}
            </div>
        </div>
        </div>
    </div>

    <div className='bg-black w-full p-4 flex justify-around'>
        <div className='text-white 
        text-center font-inter font-medium text-sm'>
            50% OFF
        </div>
        <div className='text-white 
        text-center font-inter font-medium text-sm'>
            Free shipping and returns
        </div>
        <div className='text-white 
        text-center font-inter font-medium text-sm'>
           Different payment methods
        </div>

    </div>
</>
    
    );
}
 
export default Navbar;