import { useState } from "react";
import { useQuery } from "react-query";

import { fetchDetailVendor } from "@src/fetch";
import { VendorDetailMoreProps } from "@src/types";
import { Button } from "@src/components/common";
import {
  SLayout,
  STab,
  SDetail,
  SEssential,
  SEssentialTitle,
  SEssentialSimple,
  SEssentialInfo,
  SEssentialMore,
  SContent,
  SContentMore,
  SImage,
} from "./VendorDetail.style";

const VendorDetail = ({ productId, itemId, vendoritemId }: any) => {
  const [more, setMore] = useState<VendorDetailMoreProps>({
    essentialMore: false,
    contentMore: false,
  });
  const { data, isLoading, isError } = useQuery("detailVendor", () =>
    fetchDetailVendor(productId, itemId, vendoritemId)
  );

  if (isError) {
    return <h1>Error!!!</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <SLayout>
      <STab>
        <li>상품상세</li>
        <li>상품평</li>
        <li>상품문의</li>
        <li>배송/교환/반품 안내</li>
      </STab>
      <SDetail>
        <SEssential {...more}>
          <div>
            <SEssentialTitle>필수 표기정보</SEssentialTitle>
            <SEssentialSimple>
              {data.essentials.map((essentail: any) => (
                <SEssentialInfo key={essentail.title}>
                  <div>{essentail.title}</div>
                  <div>{essentail.description}</div>
                </SEssentialInfo>
              ))}
            </SEssentialSimple>
          </div>
          <SEssentialMore {...more}>
            <button onClick={() => setMore({ ...more, essentialMore: true })}>
              필수 표기정보 더보기 <span>{"▼"}</span>
            </button>
          </SEssentialMore>
        </SEssential>
        <SContent {...more}>
          <div>
            {data.details.map((detail: any) => (
              <SImage
                key={detail.vendorItemContentDescriptions[0].content}
                src={`https:${detail.vendorItemContentDescriptions[0].content}`}
                width="100%"
                height="100%"
                layout="responsive"
                alt=""
              />
            ))}
          </div>
          <SContentMore {...more}>
            <Button
              type="button"
              onClick={() => setMore({ ...more, contentMore: true })}
            >
              상품정보 더보기 <span>{"▼"}</span>
            </Button>
          </SContentMore>
        </SContent>
      </SDetail>
    </SLayout>
  );
};

export default VendorDetail;
