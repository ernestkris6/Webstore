import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {

  const product = useSelector((state) => state.product.singleProduct)
  console.log("singleproduct", product);
  const {id} = useParams();


  return (
    <div>
     {product
     .filter((product) => product.id === id)
     .map((product, index)=> {
      return (
        <div 
      key={index}
      className='flex justify-center items-center py-10'
      >
        <div className='pl-44 grow-[4]'>
          <img 
        className='h-[650px] w-[500px] rounded-lg'
        src={product.img} 
        alt={product.name} />
        </div>

          <div className='grow-3'>
          <div className='w-[700px]'>
            <h5 className='text-2xl font-inter  font-bold tracking-normal leading-none pb-4'>{product.name}</h5>
            <p className='text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4'>15% OFF</p>
            <p>{product.text}</p>
            <div className='pb-4'>
              <div>
              <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
              <select className='className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <option></option>
              </select>
              </div>
            </div>
          </div>
          </div>
        
      </div>
      )
     })}
      
    </div>
  )
}

export default SingleProduct;