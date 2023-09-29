import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;

  margin: 20px 0;

  display: flex;
  flex-direction: row;

  & > figure {
    width: 80px;
    height: 80px;

    background-color: var(--grey-5);
    border-radius: var(--border-radius);

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  & > .product-info {
    width: 100%;
    max-width: 253px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-left: 10px;

    & > .product-details {
      height: 54px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & > h3 {
        width: 100%;
        max-width: 150px;
        height: 25px;

        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        font-weight: 700;
        font-size: 17px;
      }

      & > p {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;

        color: var(--color-primary);
      }
    }

    & > .product-actions {
      height: 45px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      & > p {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;

        cursor: pointer;
        color: var(--grey-3);
        transition: 0.5s;

        &:hover {
          color: var(--grey-2);
        }
      }

      & > .product-quantity {
        width: 100%;
        max-width: 75px;
        min-width: 63px;

        button,
        span {
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;

          color: var(--grey-2);
        }

        & > button {
          width: 20px;
          height: 20px;

          background-color: transparent;
          border: 1px solid var(--grey-5);

          padding: 0 4px 1px;
        }

        & > span {
          width: 20px;
          height: 20px;

          padding: 0.5px 8px 1.5px;

          border-top: 1px solid var(--grey-5);
          border-bottom: 1px solid var(--grey-5);
        }
      }
    }
  }
`;

export { Container };
