import styled from "@emotion/styled";

export const SLayout = styled.span`
  display: inline-block;

  margin-top: 12px;

  > div {
    height: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: solid 1px #ccc;
    border-radius: 10px;

    padding: 0 8px;
  }
`;

export const SText = styled.div`
  margin-left: 5px;
  color: #333;
  font-size: 12px;
`;
