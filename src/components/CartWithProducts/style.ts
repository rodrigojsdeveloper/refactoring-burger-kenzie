import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 465px;

  background-color: var(--grey-6);
  border-radius: 0px 0px var(--border-radius) var(--border-radius);

  & > menu {
    width: 100%;
    height: 323px;

    padding: 0 10px;
    overflow-y: scroll;

    &::-webkit-scrollbar-track {
      background-color: var(--grey-6) !important;
    }
  }

  & > div {
    width: 100%;
    height: 140px;

    padding: 0 10px 20px;
    border-top: 2px solid var(--grey-5);

    & > div {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      padding: 14px 0 22px 0;

      p,
      span {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
      }

      & > span {
        color: var(--grey-2);
      }
    }
  }
`;

export { Container };
