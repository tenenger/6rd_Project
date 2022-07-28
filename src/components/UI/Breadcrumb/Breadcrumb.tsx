import React from "react";
import { SHeader, SLayout } from "./Breadcrumb.style";
import { useQuery } from "react-query";
import { fetchBreadcrumb } from "@src/fetch";

const Breadcrumb = ({ productId }: any) => {
  const { data, isLoading, isError } = useQuery("breadcrumb", () =>
    fetchBreadcrumb(productId)
  );

  if (isError) {
    return <h1>Error!!!</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <SLayout>
      <SHeader dangerouslySetInnerHTML={{ __html: data }} />
    </SLayout>
  );
};

export default Breadcrumb;
