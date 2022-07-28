import styled from "@emotion/styled";
import { useRouter } from "next/router";

import Breadcrumb from "@src/components/UI/Breadcrumb/Breadcrumb";
import OtherVendors from "@src/components/UI/OtherVendors/OtherVendors";
import VendorInfo from "@src/components/UI/VendorInfo/VendorInfo";
import VendorDetail from "@src/components/UI/VendorDetail/VendorDetail";

export default function VendoritemPage() {
  const router = useRouter();
  const { asPath } = router;
  const { productId, itemId, vendoritemId } = router.query;

  return (
    <SLayout>
      <Breadcrumb productId={productId} />
      <VendorInfo
        productId={productId}
        vendoritemId={vendoritemId}
        url={asPath}
      />
      <OtherVendors
        productId={productId}
        itemId={itemId}
        vendoritemId={vendoritemId}
      />
      <VendorDetail
        productId={productId}
        itemId={itemId}
        vendoritemId={vendoritemId}
      ></VendorDetail>
    </SLayout>
  );
}

export const SLayout = styled.div`
  width: 980px;
  margin: 0 auto;
`;
