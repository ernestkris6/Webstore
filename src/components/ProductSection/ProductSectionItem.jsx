import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import { Button } from '@material-tailwind/react';

  import { useDispatch } from 'react-redux';
  import { addToCart } from '../../Features/Slices/CartSlice';
  

const ProductSectionItem = ({
    id,
    img,
    name,
    text,
    size,
    price,
    color,
    totalPrice

}) => {

    const dispatch =  useDispatch();

    const defaultSize = size[0];
    const defaultColor = color[0];

  return (
    <div>
        <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={img} alt={name}
        />
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        {name}
        </Typography>
        <Typography color='gray' className='font-medium'>
         {text}
        </Typography>
        <div className='flex justify-between items-center pt-4'>
        <Typography>
         Size left: {defaultSize}
        </Typography>
        <Typography color='gray' className='font-medium'>
         Color: <span className='px-2 rounded-full ml-2' style={{backgroundColor:  {defaultColor} }}></span>
        </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content='Add to Cart' placement='bottom'>
            <Button onClick={()=> dispatch(addToCart({
                id : id,
                img : img,
                text : text,
                amount : 1,
                price : price,
                totalPrice : totalPrice,
                size : defaultSize,
                color : defaultColor,
            }))} 
                size='lg' color='gray' variant='outlined' 
                ripple='true'>Add to Cart</Button>
        </Tooltip>
      </CardFooter>
    </Card>
    </div>
  )
}

export default ProductSectionItem;