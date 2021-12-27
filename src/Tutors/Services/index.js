import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const GetPosts = createAsyncThunk(
  "post/getPosts",
  async () => await (await axios.get(`${BASE_URL}/posts`)).data
);

export const DeletePost = createAsyncThunk(
  "post/deletePost",
  async (postId) =>
    await (
      await axios.delete(`${BASE_URL}/posts/${postId}`)
    ).data
);
