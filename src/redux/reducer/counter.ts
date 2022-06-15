import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    value: number
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (counterState:CounterState) => {
      const state = counterState;
      state.value += 1;
    },
    decrement: (counterState:CounterState) => {
      const state = counterState;
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
