import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const FilteredProducts = () => {
  const products = useSelector((state) => state.product.filteredProducts);
  console.log("products", products);
  const { type } = useParams();
  console.log("params", type);


  return(
    <div>
      <h1>FilteredProducts</h1>
    </div>
  )
  
};

export default FilteredProducts;






