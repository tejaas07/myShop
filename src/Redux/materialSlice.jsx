import { createSlice } from "@reduxjs/toolkit";

export const materialSlice = createSlice({
  name: "Material",
  initialState: {
    materialType: [],
    featuredPost: [],
    filterVal: "all",
    type: "all",
    id: "0",
    featuredProduct: false,
  },
  reducers: {
    setMaterial: (state, action) => {
      console.log(action.payload.material);
      state.materialType = action.payload.material;
    },
    setFeatureList: (state, action) => {
      console.log(action.payload.features);
      state.featuredPost = action.payload.features;
    },
    setFilter: (state, action) => {
      console.log(action.payload);
      state.filterVal = action.payload.value;
      state.type = action.payload.type;
      state.id = action.payload.id;
    },
    setFeature: (state, action) => {
      state.featuredProduct = true;
    },
    setFeatureFalse: (state, action) => {
      state.featuredProduct = false;
    },
  },
});
export const {
  setMaterial,
  setFilter,
  setFeature,
  setFeatureList,
  setFeatureFalse,
} = materialSlice.actions;

export default materialSlice.reducer;
