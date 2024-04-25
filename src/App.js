import Cards from "./components/Cards/Cards";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import SingleProduct from "./components/FilteredProducts/SingleProduct";
import Main from "./components/Main/Main";

import { useSelector } from "react-redux";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
const App = () => {

  const cart = useSelector((state) => state.cart.cart)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  console.log("cart", cart);
  console.log("amount", totalAmount);
  console.log("price", totalPrice);

    return ( 
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/filteredProducts/:type" element={<FilteredProducts />}></Route>
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct />}></Route>
          <Route path="/cards" element={<Cards /> }></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
     );
}
 
export default App;