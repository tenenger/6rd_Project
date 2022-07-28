import styled from "@emotion/styled";
import type {
  CarouselSCarouselProps,
  CarouselSButtonProps,
  CarouselSItemProps,
} from "@src/types";

export const SLayout = styled.div``;

export const SBrand = styled.h4`
  padding: 40px 0 30px 0;

  font-size: 18px;
  font-weight: bold;
`;

export const SButton = styled.div<CarouselSButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  ${(props) => props.position === "left" && "left: 0"};
  ${(props) => props.position === "right" && "right: 160px"};
  top: calc(50% - 25px);
  width: 30px;
  height: 50px;
  border-radius: 10px;

  color: black;
  font-size: 24px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.5);

  cursor: pointer;
  z-index: 1;
  opacity: 0;
`;

export const SCarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const SCarousel = styled.div<CarouselSCarouselProps>`
  display: table;
  table-layout: fixed;
  width: calc(${(props) => props.length * 205}px);

  font-size: 12px;
  &:hover {
    ${SButton} {
      opacity: 1;
    }
  }
`;

export const STitle = styled.div`
  padding: 12px 0 0 0;
  font-size: 12px;
  color: #111;
`;

export const SPriceContanier = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;

  color: #ae0000;
  font-weight: bold;
  font-size: 13px;
`;

export const SItem = styled.a<CarouselSItemProps>`
  float: left;
  width: 160px;
  margin-right: 45px;
  transform: translateX(${(props) => -props.offset * 205}px);

  transition: transform 0.5s;

  &:hover {
    ${STitle} {
      text-decoration: underline;
    }
  }
`;

export const SBrandShop = styled.a`
  position: absolute;
  right: 0;
  top: 0;
  float: right;
  width: 160px;
  height: 100%;
  background-color: white;

  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 1.33;
`;
export const SSubTitle = styled.div`
  padding: 12px 0 0 0;
  margin-bottom: 10px;
  color: #212b36;
`;

export const SItemTotal = styled.div`
  margin-bottom: 20px;
  color: #111;
  > span {
    font-weight: bold;
    color: #346aff;
  }
`;

export const SRatingCount = styled.span`
  color: #888;
  font-size: 12px;
`;
