import { configureStore } from "@reduxjs/toolkit";
import postReduer from './PostSlice'
export default configureStore({
  reducer: {

    post: postReduer,
  },
});