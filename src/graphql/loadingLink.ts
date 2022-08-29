import { ApolloLink } from '@apollo/client';

import { decrementRequest, incrementRequest } from 'store/graphqlSlice';
import store from '../store';

const loadingLink = new ApolloLink((operation, forward) => {
  console.log(`Incrementing for operation: ${operation.operationName}`);
  store.dispatch(incrementRequest());

  return forward(operation).map((data) => {
    console.log(`Decrementing for operation: ${operation.operationName}`);
    store.dispatch(decrementRequest());
    return data;
  });
});

export default loadingLink;
