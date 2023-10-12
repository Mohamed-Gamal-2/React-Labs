import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let fetchData = createAsyncThunk("API/fetchData", async () => {
  let { data } = await axios.get(
    "https://sara7aiti.onrender.com/api/v1/message",
    {
      headers: {
        token: localStorage.getItem("userToken"),
      },
    }
  );
  return data;
});

let APISlice = createSlice({
  name: "API",
  initialState: { APIData: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.APIData = action.payload;
    });
  },
});

export let APIReducer = APISlice.reducer;
