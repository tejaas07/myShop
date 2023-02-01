import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("Cart", JSON.stringify(state.value));
    },
  },
});
export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
