import ReactDOM from "react-dom";
import "./index.scss";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import reportWebVitals from "./reportWebVitals";
import App from "./app";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Translations from "./translations";


i18n
  .use(initReactI18next)
  .init({
    resources: Translations,
    lng: "nl",
    fallbackLng: "nl",
    interpolation: {
      escapeValue: false
    }
  });

const httpLink = createHttpLink({
  uri: "https://graphql.contentful.com/content/v1/spaces/6cgdkv8ktvf8",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: "Bearer WEudIS80BUEAGOwckbmR9QaaCEiaMRD8QDvdoJxBeb4",
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
