import { createSlice } from "@reduxjs/toolkit";
import { GetPosts } from "../Services";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [GetPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.slice(0, 15);
    },
    [GetPosts.rejected]: (state, action) => {
      state.posts = [];
    },
  },
});

export default postSlice.reducer;
