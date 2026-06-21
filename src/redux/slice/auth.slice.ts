import { createSlice } from "@reduxjs/toolkit";

import type { AuthState } from "../../interfaces/auth.interface";

import { registerThunk } from "../api/auth.api";

const initialState: AuthState = {
  loading: false,

  user: null,

  error: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload;
      })

      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
