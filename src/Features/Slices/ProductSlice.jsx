import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/Data/Data";

export const productSlice = createSlice({
    name : "products",
    initialState : {
        filteredProducts : JSON.parse(sessionStorage.getItem("filterData")) || storeData,
        singleProduct : JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
        error: false,
    },
    reducers : {
        filterProducts(state, action) {
         try {
             const filter = storeData.filter((product) =>
             product.type === action.payload);
             state.filteredProducts = filter;
             console.log("filter", filter);
             const saveState = JSON.stringify(filter);
             sessionStorage.setItem("filterData", saveState);
         }
         catch(err) {
             return err
         }
    },

        singleProduct(state, action){
            try {
                const oneProduct = storeData.filter((product) => 
                product.id === action.payload);
                state.singleProduct = oneProduct;
                const saveState = JSON.stringify(oneProduct)
                sessionStorage.setItem("oneProduct", saveState)
                console.log("oneProduct", oneProduct);

            }
            catch(err){
                return err;
            }
        },

        filterGender(state, action){
            try {
                const gender = state.filteredProducts.filter(
                    (product) => product.gender === action.payload);
                    state.error = false;
                    state.filteredProducts = gender
            }
            catch(err){
                return err;
            }
           
        },
 }



    
},

    



)

export const { filterProducts, singleProduct } = productSlice.actions;
export default productSlice.reducer;