import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

// Define a type for the slice state
interface GraphqlState {
  requestCounter: number;
  errors: string[];
}

// Define the initial state using that type
const initialState: GraphqlState = {
  requestCounter: 0,
  errors: [],
};

export const graphqlSlice = createSlice({
  name: 'graphql',
  initialState,
  reducers: {
    incrementRequest: (state) => {
      state.requestCounter += 1;
    },
    decrementRequest: (state) => {
      state.requestCounter -= 1;
    },
    addGraphqlError: (state, action: PayloadAction<string>) => {
      state.errors.push(action.payload);
    },
    closeGraphqlError: (state, action: PayloadAction<number>) => {
      if (action.payload > -1) {
        state.errors.splice(action.payload, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementRequest, decrementRequest, addGraphqlError, closeGraphqlError } = graphqlSlice.actions;

export const selectGraphqlRequests = (state: RootState) => state.graphql.requestCounter;
export const selectGraphqlErrors = (state: RootState) => state.graphql.errors;

export default graphqlSlice.reducer;
