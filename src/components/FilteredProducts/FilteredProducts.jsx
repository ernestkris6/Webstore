import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button } from "@material-tailwind/react";
import { 
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
 } from "@material-tailwind/react";
import Error from '../Error/Error';
import { 
    filterProducts, 
    filterGender, 
    sortByPrice, 
    filterByColor,
    filterBySize 
} from '../../Features/Slices/ProductSlice';


const FilteredProducts = () => {
  const products = useSelector((state) => state.product.filteredProducts);
  const error = useSelector((state)=> state.product.error)
  console.log("products", products);
  const { type } = useParams();
  console.log("params", type);

  const genderButtons = ["MALE", "FEMALE"];
  const colorButtons = [
    "red",
    "green",
    "yellow",
    "purple",
    "orange",
    "blue",
    "black",
    "brown",
  ];

  const sizeButtons = [
    "S",
    "M",
    "L",
    "XL"
  ]

  const dispatch = useDispatch();

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
                      className='bg-black font-inter text-white hover:bg-gray-300 duration-300 ease-in-out mr-4 p-2 text-md'
                      onClick={()=> dispatch(filterGender(product))}
                      >
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
                      className='bg-black font-inter text-white hover:bg-gray-300 duration-300 ease-in-out mr-4 p-2 text-md'
                      onClick={()=>dispatch(sortByPrice())}
                      >
                          HIGH PRICE
                      </Button>

                      <Menu>
                        <MenuHandler>
                          <Button color='gray' 
                              size='lg' 
                              variant='out
                              lined' 
                              ripple={true}
                              className='bg-black font-inter text-white hover:bg-gray-300 duration-300 ease-in-out mr-4 p-2 text-md'
                              >SELECT A COLOUR</Button>
                        </MenuHandler>
                        <MenuList>
                          {colorButtons.map((product, index) => {
                              return (
                                  <MenuItem 
                                  style={{color: product}} 
                                  key={index}
                                  className='px-10 py-2 hover:bg-gray-300'
                                  onClick={()=> dispatch(filterByColor(product))}
                                  >
                                    {product}
                                  </MenuItem>
                              )
                          })}
                        </MenuList>
                      </Menu>
                      <Menu>
                        <MenuHandler>
                          <Button 
                              disabled = {type === "Bags" || type === "Shoes"}
                              color='gray' 
                              size='lg' 
                              variant='out
                              lined' 
                              ripple={true}
                              className='bg-black font-inter text-white hover:bg-gray-300 duration-300 ease-in-out mr-4 p-2 text-md'>SELECT A SIZE</Button>
                        </MenuHandler>
                        <MenuList>
                          {sizeButtons.map((product, index) => {
                              return (
                                  <MenuItem 
                                  key={index}
                                  className='px-10 py-2 hover:bg-gray-300'
                                  onClick={()=> dispatch(filterBySize(product))}
                                  >
                                    {product}
                                  </MenuItem>
                              )
                          })}
                        </MenuList>
                      </Menu>
            </div>
            <div className='pr-14'>
              <Button
              color='gray' 
              size='lg' 
              variant='out
              lined' 
              ripple={true}
              className='bg-black font-inter text-white hover:bg-gray-300 duration-300 ease-in-out mr-4 p-2 text-md'
              onClick={()=> dispatch(filterProducts(type))}
              >
               CLEAR FILTER
              </Button>
              </div>
          </div>
      </div>
      {error ? <Error /> :
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
  }
  
 </div>
  );
  
};

export default FilteredProducts;






