import styled from "@emotion/styled";
import { ButtonProps } from "../../../types";

export const SButton = styled.button<ButtonProps>`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 14px 80px;
  margin: 18px 0 0;

  font-size: 17px;
  font-weight: 700;
  color: ${(props) => (props.type === "submit" ? "#fff" : "#0074e9")};
  background: ${(props) => (props.type === "submit" ? "#0074e9" : "#fff")};
  line-height: 20px;
  text-align: center;

  box-shadow: ${(props) =>
    props.type === "submit"
      ? "inset 0 -2px 0 rgb(0 0 0 / 38%)"
      : "inset 0 -1px 0 rgb(0 0 0 / 15%)"};
  cursor: pointer;
  box-sizing: border-box;
`;
