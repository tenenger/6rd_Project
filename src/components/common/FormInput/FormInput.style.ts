import styled from "@emotion/styled";

type FormInput = {
  isError?: boolean;
};

export const SFormInput = styled.input<FormInput>`
  width: 100%;
  height: 48px;
  border: 1px solid #ccc;
  outline: none;
  box-sizing: border-box;

  font-size: 14px;
  font-weight: 700;
  text-indent: 12px;
  color: #111;
  line-height: 24px;

  margin: 2.9% 0 0;
  padding: 16px 0 12px;

  transition: border-color 0.25s ease;
  border-bottom: ${(props) => !!props.isError && "2px solid red"};
  &:focus {
    border-bottom: 2px solid #0873e3;
  }
`;
