import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button } from "@material-tailwind/react";


const FilteredProducts = () => {
  const products = useSelector((state) => state.product.filteredProducts);
  console.log("products", products);
  const { type } = useParams();
  console.log("params", type);

  const genderButtons = ["MALE", "FEMALE"];


  return(
    <div className='pt-16'>
      <div className='pl-14'>
          <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none'>
            {type}
          </h1>
          <div className='flex items-center justify-between py-8'>
            <div className='flex items-center'>
                {genderButtons.map((product, index)=> {
                  return(
                    <div key={index}>
                      <Button 
                      color='gray' 
                      size='lg' 
                      variant='out
                      lined' 
                      ripple={true}
                      className='bg-black font-inter text-white hover:bg-gray-300 duration-300 ease-in-out mr-4 p-2 text-md'>
                          {product}
                      </Button>
                  </div>
                  );
                  
                })}

                      <Button 
                      color='gray' 
                      size='lg' 
                      variant='out
                      lined' 
                      ripple={true}
                      className='bg-black font-inter text-white hover:bg-gray-300 duration-300 ease-in-out mr-4 p-2 text-md'>
                          HIGH PRICE
                      </Button>
            </div>
          </div>
      </div>
      <div className='grid grid-cols-4 m-4 justify-items-center py-8 gap-12'>
          {products
          .filter((product) => product.type === type)
          .map((product, index) => {
            return (
              <div key={index}>
                <ProductCard
                id={product.id}
                name={product.name}
                text={product.text}
                img={product.img}
                price={product.price}
                color={product.color}
                
                />
              </div>
            )
          })}
      </div>
    </div>
  )
  
};

export default FilteredProducts;






