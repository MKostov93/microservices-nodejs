/**
 * EXTERNAL DEPENDENCIES.
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
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
import { theme } from "theme";

/**
 * STYLES.
 */
import "index.css";

/**
 * COMPONENTS.
 */
import App from "App";

const store = configureStore((window as any).REDUX_INITIAL_DATA);

const app = (
  <Provider store={store}>
    <ApolloProvider client={graphqlClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
