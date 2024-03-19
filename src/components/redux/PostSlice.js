import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    businessposts:[],
    Adsposts:[],
    pending: false,
  },
  reducers: {
    getAllPosts: (state, action) => {
      console.log(action);
      state.pending = false;
      state.posts = action.payload;
    },
    // business page api
    getAllBusiness: (state, action) => {
      console.log(action);
      state.pending = false;
      state.businessposts = action.payload;
    },
    getAllAds: (state, action) => {
      console.log("action",action);
      state.pending = false;
      state.Adsposts = action.payload;
    },
  },
});

export const { getAllPosts, getAllBusiness,getAllAds } = postSlice.actions;

export default postSlice.reducer;
