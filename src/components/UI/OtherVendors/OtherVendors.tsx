import React from "react";
import { useQuery } from "react-query";
import { fetchOtherVendors } from "@src/fetch";
import { Carousel } from "@src/components/common";

const OtherVendors = ({ productId, itemId, vendoritemId }: any) => {
  const { data, isLoading, isError } = useQuery("otherItems", () =>
    fetchOtherVendors(productId, itemId, vendoritemId)
  );

  if (isError) {
    return <h1>Error!!!</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Carousel data={data} />
    </>
  );
};

export default OtherVendors;
