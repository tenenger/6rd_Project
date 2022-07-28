import styled from "@emotion/styled";

export const SLayout = styled.div``;
export const STitle = styled.div`
  font-size: 12px;
  font-weight: bold;
`;
export const SDeliveryList = styled.div``;
export const SLabel = styled.label`
  display: block;
  padding-top: 7px;

  > input {
    display: inline-block;
    position: relative;
    vertical-align: bottom;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    border: 1px solid #c7c7c7;
    border-radius: 100%;
    margin-right: 8px;
  }
`;

export const SDescription = styled.span`
  font-size: 12px;
  > em {
    font-style: normal;
    &.prod-txt-green-2 {
      color: #00891a;
      font-size: 14px;
      font-weight: 700;
    }
    &.prod-txt-green-normal {
      color: #00891a;
    }
  }
`;
