/**
 * EXTERNAL DEPENDENCIES.
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";

/**
 * SERVICE WORKERS.
 */
import * as serviceWorker from "serviceWorker";

/**
 * GRAPHQL CLIENT.
 */
import graphqlClient from "api/graphqlClient";

/**
 * STORE.
 */
import configureStore from "store";

/**
 * THEME.
 */
import * as theme from "theme";

/**
 * STYLES.
 */
import "index.css";

/**
 * COMPONENTS.
 */
import App from "App";

const store = configureStore(window.REDUX_INITIAL_DATA);

const app = (
  <Provider store={store}>
    <ApolloProvider client={graphqlClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
