import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {

  const product = useSelector((state) => state.product.SingleProduct)

  const id = useParams();


  return (
    <div>
      {product}
      
    </div>
  )
}

export default SingleProduct;