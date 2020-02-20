/**
 * EXTERNAL DEPENDENCIES.
 */
import React, { Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

/**
 * GRAPHQL CLIENT.
 */
import graphqlClient from "api/graphqlClient";

/**
 * QUERIES.
 */
import { USER_SESSION } from "api/queries/authentication";

/**
 * STORE ACTIONS.
 */
import {
  authRequest,
  authSuccess,
  authFailure,
  authLogoutSuccess
} from "store/modules/Authentication/actions";

/**
 * ROUTES.
 */
import routes from "routes";

/**
 * CONTAINERS.
 */
import Authentication from "containers/Authentication/Authentication";

/**
 * STYLES.
 */
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem 0;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  width: 80rem;
`;

const Sidebar = styled.div`
  flex: 0 auto;
  width: 10rem;
  margin-left: 1rem;
`;

const Content = styled.div`
  flex: 1;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: {
          userSession
        }
      } = await graphqlClient.query({ query: USER_SESSION });

      dispatch(authRequest());

      try {
        if (!userSession) {
          dispatch(authLogoutSuccess());
        }

        dispatch(authSuccess(userSession));
      } catch (error) {
        dispatch(authFailure(error));
      }
    }

    fetchData();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Content>
          <Suspense fallback="Loading...">
            <Switch>
              {routes.map((route, index) => (
                <Route key={index} {...route} />
              ))}
            </Switch>
          </Suspense>
        </Content>

        <Sidebar>
          <Authentication />
        </Sidebar>
      </Container>
    </Wrapper>
  );
};

export default App;
