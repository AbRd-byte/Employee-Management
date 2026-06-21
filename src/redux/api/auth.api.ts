import { createAsyncThunk } from "@reduxjs/toolkit";

import { ACTIONS } from "../../constants/action.constants";

import { registerUser } from "../../services/auth.service";

import type { RegistrationRequest } from "../../interfaces/auth.interface";

export const registerThunk = createAsyncThunk(
  ACTIONS.REGISTER,

  async (user: RegistrationRequest, thunkAPI) => {
    try {
      return await registerUser(user);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error as unknown);
    }
  },
);
