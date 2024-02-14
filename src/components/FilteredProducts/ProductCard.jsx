import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { singleProduct } from '../../Features/Slices/ProductSlice';

  const ProductCard = ({id, name, text, img, price, color}) => {

  const oneProduct = useSelector((state)=> state.oneProduct.filterProduct)

  const dispatch = useDispatch();

  return (
    
    <Link to="/filteredProducts/:type/:id">
         <Card className="w-84">
      <CardHeader color="blue" className="relative">
        <img className='w-full h-60'
          src={img}
          alt=""
        />
      </CardHeader>
      <CardBody className='flex flex-col text-center'>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>
          {text}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex flex-center justify-between py-3">
      <Typography variant='small' className='font-bold text-lg'>${price}</Typography>
      <Typography variant='small' color='gray' className='flex gap-1'>
        {color?.map((color, index) => {
            return <i className='fas fa map-marker-alt fa-sm mt-[3px] p-3 mr-3 rounded-full w-4' 
            key={index}
            style={{backgroundColor: color}}></i>
        })}
      </Typography>
      </CardFooter>
    </Card>
    </Link>
   
  )
}

export default ProductCard;