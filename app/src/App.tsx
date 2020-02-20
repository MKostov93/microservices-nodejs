/**
 * EXTERNAL DEPENDENCIES.
 */
import React, { Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

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
  const { loading, error, data } = useQuery(USER_SESSION);

  useEffect(() => {
    if (loading) {
      dispatch(authRequest());
    }

    if (error) {
      dispatch(authFailure(error));
    }

    if (!loading && !data?.userSession) {
      dispatch(authLogoutSuccess());
    }

    if (data?.userSession) {
      dispatch(authSuccess(data.userSession));
    }
  }, [loading, error, data]);

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
