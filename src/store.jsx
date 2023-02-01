import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Redux/cartSlice";
import materialReducer from "./Redux/materialSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    material: materialReducer,
  },
});
