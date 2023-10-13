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

export const sendMessage = createAsyncThunk(
  "messages/sendMessage",
  async (messageData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://sara7aiti.onrender.com/api/v1/message",
        messageData
      );
      return response.data.messaged;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

let APISlice = createSlice({
  name: "API",
  initialState: { APIData: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.APIData = action.payload;
    });
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      console.log("Message:", action.payload);
    });
    builder.addCase(sendMessage.rejected, (state, action) => {
      console.log("Message:", action.payload);
    });
  },
});

export let APIReducer = APISlice.reducer;
