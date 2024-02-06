import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  console.log("products", products);
  const params = useParams();
  console.log("params", params);


  return <div>FilteredProducts</div>
  
};

export default FilteredProducts;