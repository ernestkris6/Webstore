import React from 'react';
import { Alert } from '@material-tailwind/react';

const Error = () => {
  return (
    <div className='grid grid-cols-1 items-center justify-items-center'>
        <div className='w-96'>
            <Alert color='red' className='bg-gray-300 text-xl font-inter font-bold text-black'>Sorry no product matches your filter search...clear the filter and try again.🤦‍♀️</Alert>
        </div>
    </div>
  )
}

export default Error;