import React, { useState } from 'react';
import { Tooltip, Button } from "@material-tailwind/react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../Features/Slices/CartSlice';
import { useDispatch } from 'react-redux';

const SingleProduct = () => {

  const product = useSelector((state) => state.product.singleProduct)
  
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];
  const [size, setSize] = useState(productSize);
  // console.log("sizes", size);
  const [color, setColor] = useState(productColor);

  const dispatch = useDispatch();


  // console.log("singleproduct", product);
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

          <div className='pr-16'>
          <div className='w-[700px]'>
            <h5 className='text-2xl font-inter  font-bold tracking-normal leading-none pb-4'>{product.name}</h5>
            <p className='text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4'>15% OFF</p>
            <p>{product.text}</p>
            <div className='pb-4'>
              {product.size ? 
            <div>
              <label
              htmlFor="size"
              className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
              Pick a size
            </label>
              <select
              id='size'
              name='size'
              value={size}
              onChange={(e) => setSize(e.target.value)} 
              className='className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                {product.size.map((product, index) => {
                  return (
                    <option 
                    key={index} 
                    value={product}>
                    {product}
                    </option>
                  )
                })}
              </select>
              </div> : (
                <div>
                <label
                htmlFor="size"
                className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
                Pick a size
              </label>
                <select
                id='size'
                name='size'
                disabled={true}
                value={size}
                onChange={(e) => setSize(e.target.value)} 
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                  {product?.size?.map((product, index) => {
                    return (
                      <option 
                      key={index}                       
                      value={product}>
                      {product}
                      </option>
                    )
                  })}
                </select>
                </div>
              )}
              
              <div className='pb-4'>
              <label
              htmlFor="color"
              className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
              Pick a color
            </label>
              <select
              id='color'
              name='color'
              value={color}
              onChange={(e) => setColor(e.target.value)} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {product.color.map((color, index) => {
                  return (
                    <option 
                    key={index} 
                    value={color}>
                    {color}
                    </option>
                  )
                })}
              </select>
              </div>
              <div>
                <Tooltip 
                content="Add to Cart" 
                className='p-3'
                placement="bottom">
                  <Button 
                  onClick={()=> {
                    dispatch(
                      addToCart({
                        id: product.id,
                        name: product.name,
                        size: product.size,
                        color : product.color,
                        text : product.text,
                        img : product.img,
                        price : product.price,
                        amount : 1,
                        totalPrice : product.price
                      })
                    )
                  }}
                  className='p-3'
                  color='gray'
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  >
                    ADD TO CART
                  </Button>
                </Tooltip>
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