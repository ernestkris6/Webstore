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
              <select>
                <option></option>
              </select>
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