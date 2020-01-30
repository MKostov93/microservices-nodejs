/**
 * EXTERNAL DEPENDENCIES.
 */
import React from "react";
import styled from "styled-components";

/**
 * CONTAINERS.
 */
import Login from 'containers/Login/Login';

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
  return (
    <Wrapper>
      <Container>
        <Content>Content</Content>

        <Sidebar>
          <Login />
        </Sidebar>
      </Container>
    </Wrapper>
  );
}

export default App;
