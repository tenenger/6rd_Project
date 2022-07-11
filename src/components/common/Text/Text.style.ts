import styled from "@emotion/styled";

type textProps = {
  isCorrect?: boolean;
};

export const SText = styled.p<textProps>`
  color: ${(props) => (props.isCorrect ? "#0873e3" : "#e52528")};
  display: block;
  margin: 9px 12px 0;
  padding: 0;
  font-family: dotum, sans-serif;
  font-size: 12px;
  line-height: 18px;
  cursor: default;
`;
