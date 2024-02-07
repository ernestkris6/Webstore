import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

const ProductCard = ({id, name, text, img, price, color}) => {
  return (
    
    <Card className="w-96">
      <CardHeader color="blue" className="relative h-76">
        <img
          src={img}
          alt=""
        />
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>
          {text}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex flex-center justify-between py-3">
      <Typography variant='small'>${price}</Typography>
      <Typography variant='small' color='gray' className='flex gap-1'>
        {color?.map((color, index) => {
            return <i className='fas fa map-marker-alt fa-sm mt-[3px] p-2 mr-3 rounded-full w-4' 
            key={index}
            style={{backgroundColor: color}}></i>
        })}
      </Typography>
      </CardFooter>
    </Card>
  )
}

export default ProductCard;