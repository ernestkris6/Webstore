import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider';
import Navbuttons from '../Navbuttons/Navbuttons';
import FilteredItems from '../FilteredItems/FilteredItems';
import ProductSection from '../ProductSection/ProductSection';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <div>
     <Navbar />
     <Slider />
     <Navbuttons />
     <FilteredItems />
    <ProductSection />
    <Footer />
    </div>
  )
}

export default Main;