import React from "react";
import { SLayout, SOriginPrice, SSalePrice } from "./Price.style";
import Image from "next/image";

const Price = ({ price, delivery }: any) => {
  const { discountRate, originPrice, salePrice } = price;

  return (
    <SLayout>
      <SOriginPrice>
        <span>{discountRate}% </span>
        <span>{originPrice}원 </span>
      </SOriginPrice>
      <SSalePrice>
        <span>{salePrice}원 </span>
        <Image src={`https:${delivery}`} width={56} height={14} alt="" />
      </SSalePrice>
    </SLayout>
  );
};

export default Price;
