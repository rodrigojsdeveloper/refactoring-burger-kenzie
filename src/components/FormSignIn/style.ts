import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 455.81px;
  height: 465px;

  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border: 1.5px solid var(--grey-20);
  border-radius: var(--border-radius);

  & > div {
    width: 100%;
    height: 342px;

    .divButtons {
      width: 100%;
      height: 200px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      text-align: center;

      & > p {
        width: 100%;
        max-width: 280px;

        font-size: 14px;
        font-weight: 400;
        line-height: 18px;

        color: var(--grey-50);
      }
    }
  }
`;

export { Container };
