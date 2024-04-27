import { createSlice } from "@reduxjs/toolkit";

export const productsListReducer = createSlice({
  name: "productsList",
  initialState: {
    value: [],
  },
  reducers: {
    productsListAction: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { productsListAction } = productsListReducer.actions;
export default productsListReducer.reducer;
