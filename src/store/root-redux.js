import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  totalIncome: 0,
  totalExpense: 0,
  incomeItems: [],
  expenseItems: [],
};

const incomeSlice = createSlice({
  name: "income",
  initialState: initialState,
  reducers: {
    addIncome: (state, action) => {
      state.totalIncome += action.payload.amount;
      const data = {
        description: action.payload.description,
        amount: action.payload.amount,
      };

      state.incomeItems.push(data);
    },
  },
});

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialState,
  reducers: {
    addExpense: (state, action) => {
      state.totalExpense += action.payload.amount;
      const data = {
        description: action.payload.description,
        amount: action.payload.amount,
      };

      state.expenseItems.push(data);
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
