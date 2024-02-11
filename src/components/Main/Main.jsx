import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider';
import Navbuttons from '../Navbuttons/Navbuttons';
import FilteredItems from '../FilteredItems/FilteredItems';
import OtherItems from '../FilteredItems/OtherItems';

const Main = () => {
  return (
    <div>
     <Navbar />
     <Slider />
     <Navbuttons />
     <FilteredItems />
     <OtherItems />
    </div>
  )
}

export default Main;