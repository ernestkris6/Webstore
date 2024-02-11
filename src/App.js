import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import SingleProduct from "./components/FilteredProducts/SingleProduct";
import Main from "./components/Main/Main";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {

    return ( 
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/filteredProducts/:type" element={<FilteredProducts />}></Route>
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
     );
}
 
export default App;