import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/Data/Data";

export const productSlice = createSlice({
    name : "products",
    initialState : {
        filteredProducts : JSON.parse(sessionStorage.getItem("filterData")) || storeData,
    },
    reducers : {
        filterProducts(state, action) {
         try {
             const filter = storeData.filter((product)=>
             product.type === action.payload);
             state.filteredProducts = filter;
             console.log("filter", filter);
             const saveState = JSON.stringify(filter);
             sessionStorage.setItem("filterData", saveState);
         }
         catch(err) {
             return err
         }
    }
 }

    
},

    



)

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;