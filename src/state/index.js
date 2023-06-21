import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  products: ["lindo's product"],
};

export const ecommerseSlice = createSlice({
  name: "ecommerse",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setProducts: (state, action) => {
      state.products = action.payload.products;
      console.log(action.payload, "state");
    },
  },
});

export const { setLogin, setLogout, setProducts } = ecommerseSlice.actions;
export default ecommerseSlice.reducer;
