import cookies from "js-cookie";

export const getRefreshToken = () => cookies.get("refreshToken");

export const getAccessToken = () => cookies.get("accessToken");

export const setAccessToken = (data: any) =>
  cookies.set("accessToken", data.access, { expires: 1 });

export const setRefreshToken = (data: any) =>
  cookies.set("refreshToken", data.refresh, { expires: 7 });
