import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstanse } from "../../api/axiosInstanse";

export const getAllItem = createAsyncThunk(
  "shop/getAllItem",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstanse.get("/item");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
