
import { configureStore } from "@reduxjs/toolkit";
import todoreducers from "./todoSlice"
export const Store=configureStore({
        
    reducer:todoreducers

});
export default Store;