import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  totalIncome: 0,
  incomeItems: [],
};

const incomeSlice = createSlice({
  name: "income",
  initialState: initialState,
  reducers: {
    addIncome: (state, action) => {
      state.totalIncome += action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    income: incomeSlice.reducer,
  },
  devTools: true,
});

export const incomeActions = incomeSlice.actions;
export default store;
