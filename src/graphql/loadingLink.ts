import { ApolloLink } from '@apollo/client';

import { decrementRequest, incrementRequest } from 'store/graphqlSlice';
import store from '../store';

const skipOperations = ['getNumberPrices'];

const loadingLink = new ApolloLink((operation, forward) => {
  if (!skipOperations.includes(operation.operationName)) {
    store.dispatch(incrementRequest());
  }

  return forward(operation).map((data) => {
    if (!skipOperations.includes(operation.operationName)) {
      store.dispatch(decrementRequest());
    }
    return data;
  });
});

export default loadingLink;
