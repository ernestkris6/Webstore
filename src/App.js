import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import Main from "./components/Main/Main";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {

    return ( 
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/filteredProducts/:type" element={<FilteredProducts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
     );
}
 
export default App;