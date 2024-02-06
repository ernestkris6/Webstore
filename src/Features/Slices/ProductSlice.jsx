import { createSlice } from "@reduxjs/toolkit";
// import { Data } from "../../assets/Data/Data";

export const productSlice = createSlice({
    name : "products",
    initialState : {
        filteredProducts
        // filteredProducts : JSON.parse(sessionStorage.getItem("filterData")) || Data
    },
    reducers : {
        filteredProducts(state, action) {
             try {
                 // const filter = Data.filter((product)=>
                 // product.type === action.payload);
                 // state.filteredProducts = filter;
                 // console.log("filter", filter);
                 // const saveState = JSON.stringify(filter);
                 // sessionStorage.setItem("filterData", saveState);
             }
             catch(err) {
                 return err
             }
        }
     }
},


)

export const { filteredProducts } = productSlice.actions;
export default productSlice.reducer;