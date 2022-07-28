import type { RatingStarProps } from "@src/types";
import { SLayout, SRatingStar } from "./RatingStar.style";

const RatingStar = ({ ratingAverage, content }: RatingStarProps) => {
  return (
    <SLayout>
      <SRatingStar rate={ratingAverage}>
        <span />
      </SRatingStar>
      {content}
    </SLayout>
  );
};

export default RatingStar;
