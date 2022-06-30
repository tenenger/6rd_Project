import axios from "axios";
import { LOGIN_URL, REFRESH_URL, SIGNUP_URL } from "@constants/url";
import { getRefreshToken, setAccessToken, setRefreshToken } from "@utils/token";
import { Service } from "@utils/service";

type SignupAgreements = {
  privacy: boolean;
  ad:
    | {
        email: boolean;
        sms: boolean;
        app: boolean;
      }
    | false;
};

class AuthService extends Service {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    // refreshToken을 받는다.
    const refreshToken = getRefreshToken();
    if (!refreshToken) return;

    // axios 인스턴스를 생성, API 호출
    const instance = super.refreshService(refreshToken);
    const { data } = await instance.post(REFRESH_URL);

    // accessToken과 refreshToken을 쿠키에 저장
    setAccessToken(data);
    setRefreshToken(data);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    // 데이터를 body 변수로 정의
    const body = {
      email,
      password,
      name,
      phoneNumber,
      agreements,
    };

    // axios 인스턴스를 생성, API 호출
    const instance = super.service();
    const { data } = await instance.post(SIGNUP_URL, body);

    // accessToken과 refreshToken을 쿠키에 저장
    setAccessToken(data);
    setRefreshToken(data);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    // 데이터를 body 변수로 정의
    const body = { email, password };

    // axios 인스턴스를 생성, API 호출
    const instance = super.service();
    const { data } = await instance.post(LOGIN_URL, body);

    // accessToken과 refreshToken을 쿠키에 저장
    setAccessToken(data);
    setRefreshToken(data);
  }
}

export default new AuthService();
