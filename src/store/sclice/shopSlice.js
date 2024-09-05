import { createSlice } from "@reduxjs/toolkit";
import { getAllItem } from "../thunk/shopThunk";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shop: [],
  },
  reducers: {
    incrementQuantyti: (state, action) => {
      const product = state.shop.find((item) => item.id === action.payload.id);

      if (product) {
        if (product.quantyti < product.available) {
          product.quantyti = product.quantyti + 1;
          product.totalPrice = product.quantyti * product.price;
        }
      }
    },
    decrementQuantyti: (state, action) => {
      const product = state.shop.find((item) => item.id === action.payload);
      if (product) {
        if (product.quantyti >= 1) {
          product.quantyti = product.quantyti - 1;
          product.totalPrice = product.totalPrice - product.price;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllItem.fulfilled, (state, action) => {
      state.shop = action.payload;
    });
  },
});
export const { incrementQuantyti, decrementQuantyti } = shopSlice.actions;
export const shopReducers = shopSlice.reducer;
