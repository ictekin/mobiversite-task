import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../assets/data.json";

const initialState = {
  result: null,
  error: null,
  loading: false,
};

export const getAppDetail = createAsyncThunk("getAppDetail", async () => {
  try {
    return data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return err;
  }
});

const getAppDetailSlice = createSlice({
  name: "getAppDetail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAppDetail.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAppDetail.fulfilled, (state, action) => {
        state.result = action.payload;
      })
      .addCase(getAppDetail.rejected, (state, action) => {
        state.error = action.payload?.errors;
      });
  },
});

export default getAppDetailSlice.reducer;
