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
      </div>
      )
     })}
      
    </div>
  )
}

export default SingleProduct;