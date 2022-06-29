import { SERVER_URL } from "@constants/url";
import axios from "axios";

export class User {
  user(accessToken: string) {
    const instance = axios.create({
      baseURL: SERVER_URL,
      data: null,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return instance;
  }
  getId() {
    const instance = axios.create({
      baseURL: SERVER_URL,
      data: null,
    });
    return instance;
  }
}

// export const refreshInstance = ref

// refreshInstance.interceptors.request.use((config) => {
//   return config;
// });
