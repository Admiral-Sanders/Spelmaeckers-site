import { onError } from '@apollo/client/link/error';
import store from 'store';
import { addGraphqlError, decrementRequest } from 'store/graphqlSlice';

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      const errorText = `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`;
      console.log(errorText);
      store.dispatch(addGraphqlError(errorText));
      store.dispatch(decrementRequest());
    });
});

export default errorLink;
