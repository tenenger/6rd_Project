import styled from "@emotion/styled";

export const SLayout = styled.div``;
export const SGalleryContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SImage = styled.div``;

export const SGallery = styled.div`
  ${SImage}.current {
    box-sizing: border-box;
    border: 2px solid #346aff;
  }
`;
