import { SERVER_URL } from "@constants/url";
import axios from "axios";

export class Auth {
  auth() {
    const instance = axios.create({
      baseURL: SERVER_URL,
      data: null,
    });
    return instance;
  }
  authRefresh(refreshToken: string) {
    const instance = axios.create({
      baseURL: SERVER_URL,
      data: null,
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    return instance;
  }
}

// export const refreshInstance = ref

// refreshInstance.interceptors.request.use((config) => {
//   return config;
// });
