import { ReactNode } from "react";

export interface CarouselSCarouselProps {
  length: number;
}

export interface CarouselSButtonProps {
  position: "left" | "right";
}

export interface CarouselSItemProps {
  offset: number;
}

export interface CarouselSRatingStarProps {
  rate: number;
}

export interface VendorDetailMoreProps {
  essentialMore: boolean;
  contentMore: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

export interface GalleryProps {
  images: {
    detailImage: string;
    origin: string;
    preloadImage: string;
    thumbnailImage: string;
  }[];
}

export interface ShippingProps {
  shippingFeeList: {
    freeShippingConditionMessage: string | null;
    message: string;
    returnFeeMessage: string | null;
    shippingFeeType: string | null;
  }[];
  deliveryList: {
    badgeUrl: string | null;
    company: string | null;
    countDownMessage: string | null;
    countDownMillisecond: string | null;
    delayMessage: string | null;
    deliveryExtraInfo: string | null;
    deliveryNotice: string | null;
    deliveryReminderMessage: string | null;
    descriptionBadge: string | null;
    descriptions: string;
    logistics: boolean;
    loyaltyButtonText: string | null;
    rocketWowQuestionMark: boolean;
    speedType: string | null;
    type: string | null;
  }[];
}

export interface RatingStarProps {
  ratingAverage: number;
  content: ReactNode;
}
