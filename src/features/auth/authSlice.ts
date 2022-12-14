import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './../../models/user';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn?: boolean;
  logging?: boolean;
  currentUser?: IUser;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<IUser>) {
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },
    logout(state) {
      state.logging = false;
      state.currentUser = undefined;
    },
  },
});

//Action
export const authAction = authSlice.actions;

//Selector
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.isLogging;

const authReducer = authSlice.reducer;
export default authReducer;
