import { createSlice } from '@reduxjs/toolkit';

export const graphqlSlice = createSlice({
  name: 'loading',
  initialState: {
    requestCounter: 0,
  },
  reducers: {
    incrementRequest: (state) => {
      state.requestCounter += 1;
    },
    decrementRequest: (state) => {
      state.requestCounter -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementRequest, decrementRequest } = graphqlSlice.actions;

export default graphqlSlice.reducer;
