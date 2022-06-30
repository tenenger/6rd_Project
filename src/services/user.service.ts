import { USER_ME_URL, USER_URL } from "@constants/url";
import { getAccessToken } from "@utils/token";
import { Service } from "@utils/service";

class UserService extends Service {
  async me() {
    // accessToken을 받는다.
    const accessToken = getAccessToken();
    if (!accessToken) return;

    // axios 인스턴스를 생성, API 호출
    const instance = super.userService(accessToken);
    const { data } = await instance.get(USER_ME_URL);

    return data;
  }

  async read(id: number) {
    // axios 인스턴스를 생성, API 호출
    const instance = super.service();
    const { data } = await instance.get(USER_URL + id);

    return data;
  }
}

export default new UserService();
