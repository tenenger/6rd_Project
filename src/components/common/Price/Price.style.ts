import styled from "@emotion/styled";

export const SLayout = styled.div`
  padding: 17px 0;
`;

export const SOriginPrice = styled.div`
  margin-bottom: 2px;

  font-size: 14px;
  > span {
    color: #111;

    &:nth-of-type(2) {
      text-decoration: line-through;
      color: #888;
    }
  }
`;
export const SSalePrice = styled.div`
  color: #ae0000;
  font-size: 18px;
  font-weight: bold;
`;
