import styled from "@emotion/styled";

export const SLayout = styled.div`
  display: flex;
  margin: 18px 0 0;

  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SQuantityInput = styled.input`
  width: 61px;
  height: 40px;
  padding: 11px 0 9px 0;

  color: #111;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  vertical-align: top;
  line-height: 25px;
  border: 0;
  border-right: 1px solid #eee;
  box-sizing: border-box;
  outline: none;
  background: transparent;
`;

export const SArrow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: transparent;

  width: 20px;

  > button {
  }
`;
