import styled from "@emotion/styled";

export const SLayout = styled.div`
  display: flex;
  gap: 20px;
`;

export const SForm = styled.form``;

export const STitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const SDescriptions = styled.ul`
  font-size: 12px;

  padding: 0;
  margin-left: 16px;
`;

export const SBuy = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  > button {
    width: 190px;
    height: 42px;
    padding: 0;
  }
`;

export const SRatingCount = styled.span`
  color: #346aff;
  font-size: 12px;
`;
