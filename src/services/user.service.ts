import { USERME_URL, USER_URL } from "@constants/url";
import { getAccessToken } from "@utils/token";
import { User } from "@utils/user";

class UserService extends User {
  async me() {
    // accessToken을 받는다.
    const accessToken = getAccessToken();
    if (!accessToken) return;

    // axios 인스턴스를 생성, API 호출
    const instance = super.user(accessToken);
    const { data } = await instance.get(USERME_URL);

    return data;
  }

  async read(id: number) {
    // axios 인스턴스를 생성, API 호출
    const instance = super.getId();
    const { data } = await instance.get(USER_URL + id);

    return data;
  }
}

export default new UserService();
