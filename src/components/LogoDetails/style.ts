import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 465px;
  height: 276px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;

    & > img:nth-child(1) {
      padding-bottom: 20px;
    }

    & > img:nth-child(3) {
      display: none;
    }
  }
`;

export { Container };
