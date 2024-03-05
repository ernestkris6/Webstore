import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className='mt-28'>
        <div className='flex items-center justify-center'>
            <hr className='h-px w-4/5 bg-gray-400 opacity-50 otline-none border-none' />
        </div>
        <div className='flex items-center justify-around pt-4'>
            <div>
                <img className='h-20' src={logo} alt='logo' />
            </div>
            <div>
                <p className='text-black text-sm font-inter font-bold leading-none no-underline left-'>
                    Copyright &copy; 2024 by Kris Web Dev
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer;