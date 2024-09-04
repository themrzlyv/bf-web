import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    isLoading: false,
    errors: null,
  },
  data: null,
  credentialError: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setFormLoading: (state, action) => {
      state.form.isLoading = action.payload;
    },
    setFormError: (state, action) => {
      state.form.errors = action.payload;
    },
    setCredentialError: (state, action) => {
      state.credentialError = action.payload;
    },
  },
});

export const { setFormLoading, setFormError, setCredentialError } = loginSlice.actions;

export const selectLoginForm = (state: RootState) => state.login.form;

export default loginSlice.reducer;
