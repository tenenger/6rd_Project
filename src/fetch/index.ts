import axios from "axios";
import { BASE_URL } from "@src/constants/posts";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchBreadcrumb = async (
  productId: string | string[] | undefined
) => {
  const { data } = await instance.get(
    `/api/products/${productId}/breadcrumb-gnbmenu`
  );

  return data;
};

export const fetchVendorInfo = async (
  productId: string | string[] | undefined,
  vendorItemId: string | string[] | undefined
) => {
  const { data } = await instance.get(
    `/api/products/${productId}/vendoritems/${vendorItemId}`
  );

  return data;
};

export const fetchOtherVendors = async (
  productId: string | string[] | undefined,
  itemId: string | string[] | undefined,
  vendoritemId: string | string[] | undefined
) => {
  const { data } = await instance.get(
    `/api/products/${productId}/brand-sdp/widget/brand-sdp?itemId=${itemId}&vendoritemId=${vendoritemId}`
  );

  return data;
};

export const fetchDetailVendor = async (
  productId: string | string[] | undefined,
  itemId: string | string[] | undefined,
  vendoritemId: string | string[] | undefined
) => {
  const { data } = await instance.get(
    `/api/products/${productId}/items/${itemId}/vendoritems/${vendoritemId}`
  );

  https: return data;
};
