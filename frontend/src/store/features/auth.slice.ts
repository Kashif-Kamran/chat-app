import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  removeAllFromLocalStorage,
  setItemToLocalStoarge,
} from "@/utils/storage";
type State = {
  accessToken: string | null;
  isLoading: boolean;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isLoggedIn: boolean;
};

const initialState: State = {
  accessToken: "null",
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
  isLoading: false,
  isLoggedIn: true,
};

const { reducer, name } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (_state, action: PayloadAction<{ user: State }>) => {
      action.payload.user.accessToken &&
        setItemToLocalStoarge("access_token", action.payload.user.accessToken);
      return action.payload.user;
    },
    logout: () => {
      removeAllFromLocalStorage();
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      userLogin.fulfilled,
      (state, action: PayloadAction<State | undefined>) => {
        if (!action.payload?.accessToken) {
          return state;
        }
        return {
          ...state,
          ...action.payload,
          isLoggedIn: true,
        };
      }
    );
  },
});

export const userLogin = createAsyncThunk(
  `${name}/userLogin`,
  async (
    payload: { email: string; password: string },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      console.log(">> Please call api");
      const tempApiData = {
        accessToken: "token",
        _id: "id",
        firstName: "firstName",
        lastName: "lastName",
        email: "email",
      };
      fulfillWithValue(tempApiData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export default reducer;
