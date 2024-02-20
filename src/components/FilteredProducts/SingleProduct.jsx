import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {

  const product = useSelector((state) => state.product.singleProduct)
  console.log("singleproducts", product);
  const {id} = useParams();


  return (
    <div>
     {product.filter((product)=> product.id === id).map((product, index)=> {
      return <div 
      key={index}
      className='flex justify-center items-center py-16'
      >
        <img src={product.img} alt={product.name} />
      </div>
     })}
      
    </div>
  )
}

export default SingleProduct;