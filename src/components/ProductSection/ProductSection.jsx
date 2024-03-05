import React from 'react';
import { storeData } from '../../assets/Data/Data';
import ProductSectionItem from './ProductSectionItem';

const ProductSection = () => {

  return (
    <div>
      <div className='bg-black mt-8 p-2 w-[50%] mx-auto rounded-md'>
          <h2 className='text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none'>SUMMER SALE T-SHIRTS 30%</h2>
      </div>
      <div className='grid grid-cols-3 justify-items-center py-3 gap-4 mx-auto max-w-7xl'>
        {storeData.slice(0,6).map((product, index) => {
            return <div key={index}> 
                <ProductSectionItem
                id={product.id}
                name={product.name}
                img={product.img}
                text={product.text}
                price={product.price}
                totalPrice={product.totalPrice}
                color={product.color}
                size={product.size} />
            </div>
        })}
      </div>
    </div>
  )
}

export default ProductSection;