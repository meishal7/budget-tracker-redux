import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  totalIncome: 0,
  totalExpense: 0,
  incomeItems: [],
  expenseItems: [],
};

const incomeSlice = createSlice({
  name: "income",
  initialState: { totalIncome: 0, incomeItems: [] },
  reducers: {
    addIncome: (state, action) => {
      state.totalIncome += action.payload.amount;
      state.incomeItems.push(action.payload);
    },
    delete: (state, action) => {
      state.totalIncome -= action.payload.amount;
      state.incomeItems = state.incomeItems.filter(
        (item) => item.description !== action.payload.description
      );
    },
  },
});

const expenseSlice = createSlice({
  name: "expense",
  initialState: { totalExpense: 0, expenseItems: [] },
  reducers: {
    addExpense: (state, action) => {
      state.totalExpense += action.payload.amount;
      state.expenseItems.push(action.payload);
    },
    delete: (state, action) => {
      state.totalExpense -= action.payload.amount;
      state.expenseItems = state.expenseItems.filter(
        (item) => item.description !== action.payload.description
      );
    },
  },
});

const store = configureStore({
  reducer: {
    income: incomeSlice.reducer,
    expense: expenseSlice.reducer,
  },
  devTools: true,
});

export const incomeActions = incomeSlice.actions;
export const expenseActions = expenseSlice.actions;

export default store;
