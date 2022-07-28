import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

import { fetchVendorInfo } from "@src/fetch";
import {
  Badge,
  Bundle,
  Price,
  SEO,
  Button,
  QuantityInput,
  Gallery,
  Shipping,
  RatingStar,
} from "@src/components/common";
import {
  SLayout,
  SDescriptions,
  STitle,
  SForm,
  SBuy,
  SRatingCount,
} from "./VendorInfo.style";

export default function VendorInfo({ productId, vendoritemId, url }: any) {
  const { data, isLoading, isError } = useQuery("vendorInfo", () =>
    fetchVendorInfo(productId, vendoritemId)
  );

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
  };

  if (isError) {
    return <h1>Error!!!</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <SLayout>
      <SEO
        itemName={data.itemName}
        thumbnail={data.images[0].thumbnailImage}
        url={url}
      />

      <Gallery images={data.images} />
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <STitle>{data.itemName}</STitle>
        <RatingStar
          ratingAverage={data.ratingAverage}
          content={
            <SRatingCount>
              {data.ratingCount.toLocaleString()}개 상품평
            </SRatingCount>
          }
        />
        <Price
          price={data.quantityBase[0].price}
          delivery={data.quantityBase[0].delivery.badgeUrl}
        />
        <Shipping
          shippingFeeList={data.quantityBase[0].shippingFeeList}
          deliveryList={data.quantityBase[0].deliveryList}
        ></Shipping>
        <Badge
          icon={data.ccidInfo.simpleInfo.iconUrl}
          text={data.ccidInfo.simpleInfo.ccidText}
        />
        <Badge
          icon={data.cashBackSummary.cashIconUrl}
          text={`최대 ${data.cashBackSummary.finalCashBackAmt}원 적립`}
        />
        {data.bundleOption.options.map((option: any) =>
          option.items.map((item: any) => (
            <Bundle key={item} icon={option.icon} bundle={item} />
          ))
        )}
        <SDescriptions>
          {data.sellingInfoVo.sellingInfo.map((el: any) => (
            <li key={el}>{el}</li>
          ))}
        </SDescriptions>
        <SBuy>
          <QuantityInput />
          <Button type="button" onClick={() => alert("장바구니 담기")}>
            장바구니 담기
          </Button>
          <Button type="submit" onClick={() => alert("바로 구매")}>
            바로구매
          </Button>
        </SBuy>
      </SForm>
    </SLayout>
  );
}
