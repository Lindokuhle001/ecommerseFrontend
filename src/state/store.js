import { configureStore } from "@reduxjs/toolkit";
import ecommerseReducer from "./index";
const store = configureStore({
  reducer: {
    ecommerse: ecommerseReducer,
  },
});

export default store;
