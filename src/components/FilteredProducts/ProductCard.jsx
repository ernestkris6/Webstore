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
    
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={img}
          alt=""
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>
          {text}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Typography>${price}</Typography>
      <Typography>
        {color.map((color, index) => {
            return <i className='fas fa map-marker-alt fa-sm mt-[3px] p-2 rounded-full w-4' 
            key={index}
            style={{backgroundColor: color}}></i>
        })}
      </Typography>
        {/* <Button>Read More</Button> */}
      </CardFooter>
    </Card>
  )
}

export default ProductCard;