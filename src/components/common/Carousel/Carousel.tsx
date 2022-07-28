import { useState } from "react";
import Image from "next/image";

import { RatingStar } from "@src/components/common";
import {
  SBrand,
  SButton,
  SCarousel,
  SCarouselContainer,
  SItem,
  SLayout,
  STitle,
  SPriceContanier,
  SBrandShop,
  SSubTitle,
  SItemTotal,
  SRatingCount,
} from "./Carousel.style";

const Carousel = ({ data }: any) => {
  const {
    brandName,
    logoImageUrl,
    brandShopLink,
    claimText,
    itemTotal,
    items,
  } = data;
  const [offset, setOffset] = useState<number>(0);

  const handleLeftButtonClick = () => {
    if (offset > 0) setOffset((prev) => prev - 1);
    if (offset === 0) setOffset(items.length - 4);
  };
  const handleRightButtonClick = () => {
    if (offset < items.length - 4) setOffset((prev) => prev + 1);
    if (offset === items.length - 4) setOffset(0);
  };

  return (
    <SLayout>
      <SBrand>{brandName}의 다른 상품들</SBrand>
      <SCarouselContainer>
        <SCarousel length={items.length}>
          {items.map((item: any) => (
            <SItem
              offset={offset}
              key={item.vendorItemId}
              href={`https://www.coupang.com/${item.link}`}
            >
              <Image
                src={`https:${item.imageUrl}`}
                width={160}
                height={160}
                alt=""
              />
              <STitle>{item.title}</STitle>
              <SPriceContanier>
                <span>{item.salesPrice.toLocaleString()}원</span>
                {item.badgeUrl && (
                  <Image
                    src={`https:${item.badgeUrl}`}
                    width={56}
                    height={14}
                    alt=""
                  />
                )}
              </SPriceContanier>
              <RatingStar
                ratingAverage={item.ratingAverage}
                content={<SRatingCount>({item.ratingCount})</SRatingCount>}
              />
            </SItem>
          ))}
          <SButton position="left" onClick={handleLeftButtonClick}>
            {"<"}
          </SButton>
          <SButton position="right" onClick={handleRightButtonClick}>
            {">"}
          </SButton>
        </SCarousel>
        <SBrandShop href={`https://www.coupang.com/${brandShopLink}`}>
          <Image
            src={`https:${logoImageUrl}`}
            width={160}
            height={160}
            alt=""
          ></Image>
          <SSubTitle>{claimText}</SSubTitle>
          <SItemTotal>
            총 <span>{itemTotal}</span> 개
          </SItemTotal>
        </SBrandShop>
      </SCarouselContainer>
    </SLayout>
  );
};

export default Carousel;
