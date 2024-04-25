import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "./containers/List/reducers/ListReducer";

export default configureStore({
  reducer: {
    list: ListReducer,
  },
});
