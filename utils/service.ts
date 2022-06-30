import { SERVER_URL } from "@constants/url";
import axios from "axios";

// axios 인스턴스 처음이자 마지막으로 생성
const instance = axios.create({
  baseURL: SERVER_URL,
  data: null,
});

export class Service {
  // service 메소드는 기본 인스턴스 반환
  service() {
    return instance;
  }

  // refreshService는 headers에 refreshToken을 넣은 인스턴스 반환
  refreshService(refreshToken: string) {
    // axios request 전에 접근한다.
    instance.interceptors.request.use(
      (config) => {
        // headers에 refreshToken을 넣어준다.
        config.headers = {
          Authorization: `Bearer ${refreshToken}`,
        };
        return config;
      },
      // 에러 핸들러.
      (error) => {
        return Promise.reject(error);
      }
    );
    return instance;
  }

  // userService 메소드는 headers에 accessToken을 넣은 인스턴스 반환
  userService(accessToken: string) {
    // axios request 전에 접근한다.
    instance.interceptors.request.use(
      (config) => {
        // headers에 accessToken을 넣어준다.
        config.headers = {
          Authorization: `Bearer ${accessToken}`,
        };
        return config;
      },
      // 에러 핸들러.
      (error) => {
        return Promise.reject(error);
      }
    );
    return instance;
  }
}
