import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider';
import Navbuttons from '../Navbuttons/Navbuttons';
import FilteredItems from '../FilteredItems/FilteredItems';

const Main = () => {
  return (
    <div>
     <Navbar />
     <Slider />
     <Navbuttons />
     <FilteredItems />
    </div>
  )
}

export default Main;