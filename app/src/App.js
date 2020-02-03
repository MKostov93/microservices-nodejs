/**
 * EXTERNAL DEPENDENCIES.
 */
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";

/**
 * QUERIES.
 */
import { USER_SESSION_QUERY } from "api/queries/authentication";

/**
 * STORE ACTIONS.
 */
import {
  authStart,
  authSuccess,
  authFail,
} from "store/modules/Authentication/actions";

/**
 * CONTAINERS.
 */
import Authentication from 'containers/Authentication/Authentication';

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
  const { loading, error, data } = useQuery(USER_SESSION_QUERY);

  if (loading) {
    dispatch(authStart());
  }

  if (error) {
    dispatch(authFail(error));
  }

  if (data?.userSession) {
    dispatch(authSuccess(data.userSession));
  }

  return (
    <Wrapper>
      <Container>
        <Content>Content</Content>

        <Sidebar>
          <Authentication />
        </Sidebar>
      </Container>
    </Wrapper>
  );
}

export default App;
