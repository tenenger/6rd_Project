import styled from "@emotion/styled";
import { CarouselSRatingStarProps } from "@src/types";

export const SLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SRatingStar = styled.span<CarouselSRatingStarProps>`
  display: inline-block;
  position: relative;
  width: 75px;
  height: 18px;

  background: url("/image/fiveStars.png") no-repeat;
  background-position: left bottom;
  > span {
    position: absolute;
    width: ${(props) => (props.rate / 5) * 75}px;
    height: 16px;

    background: url("/image/fiveStars.png") no-repeat;
    background-position: left top;
  }
`;
