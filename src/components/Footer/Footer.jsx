import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';





const Footer = () => {
    //const time = new Date().toLocaleTimeString();
    const [ time, setTime ] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setTimeout(()=>{
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [time])
     
  return (
    <div className='mt-12'>
        <div className='flex items-center justify-center'>
            <hr className='h-px w-4/5 bg-gray-400 opacity-50 otline-none border-none' />
        </div>
        <div className='flex items-center justify-around pt-4'>
            <div>
                <img className='h-20' src={logo} alt='logo' />
            </div>
            <div>
                <h1 className='font-bold'>{time}</h1>
            </div>
            <div>
                
                <p className='text-black text-sm font-inter font-bold leading-none no-underline left-'>
                    Copyright &copy; 2024 by Kris Web Dev.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer;