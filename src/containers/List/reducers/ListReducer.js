import { createSlice } from "@reduxjs/toolkit";

export const ListReducer = createSlice({
  name: "list",
  initialState: {
    value: [],
  },
  reducers: {
    listAction: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { listAction } = ListReducer.actions;

export default ListReducer.reducer;
