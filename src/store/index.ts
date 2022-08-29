import { configureStore } from '@reduxjs/toolkit';
import graphqlSlice from './graphqlSlice';

export default configureStore({
  reducer: {
    graphql: graphqlSlice,
  },
});
