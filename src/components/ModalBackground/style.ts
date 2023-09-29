import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--shadow);

  overflow-y: auto;
`;

export { Container };
