import styled from "@emotion/styled";

export const SButton = styled.button`
  display: block;
  width: 100%;
  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;

  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 16px 17px;
  margin: 18px 0 0;

  background: ${(props) => (props.type === "submit" ? "#0074e9" : "#fff")};
  color: ${(props) => (props.type === "submit" ? "#fff" : "#0074e9")};
  box-shadow: ${(props) =>
    props.type === "submit"
      ? "inset 0 -2px 0 rgb(0 0 0 / 38%)"
      : "inset 0 -1px 0 rgb(0 0 0 / 15%)"};
`;
