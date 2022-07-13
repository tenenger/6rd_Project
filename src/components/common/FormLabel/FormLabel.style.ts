import styled from "@emotion/styled";

type SFormLabel = {
  isError?: boolean;
};

export const SFormLabel = styled.label<SFormLabel>`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: ${(props) => props.isError && "2px solid red"};

  &:focus-within {
    border-bottom: 2px solid #0873e3;
  }

  > div {
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 48px;
    border: 1px solid #ccc;
    border-right: none;
    margin: 2.9% 0 0;
    > svg {
      width: 100%;
      height: 26px;
      color: #cbcbcb;
    }
  }
`;
