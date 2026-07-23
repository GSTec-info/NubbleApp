import { api, type PageAPI } from "@api";
import type { PostAPI } from "./postTypes";

const USERNAME_TEST = "mariajulia@coffstack.com";
const PASSWORD_TEST = "supersecret";

type ResponseAPI = PageAPI<PostAPI>;

async function getList(): Promise<ResponseAPI | null> {
  try {
    const responseLogin = await api.post(`auth/login`, {
      email: USERNAME_TEST,
      password: PASSWORD_TEST,
      rememberMe: true,
    });

    const responsePost = await api.get<PageAPI<PostAPI>>(`user/post`, {
      headers: {
        Authorization: `Bearer ${responseLogin.data.auth.token}`,
      },
    });

    return responsePost.data;
  } catch (err) {
    console.log("=== ERRO EM 'getList': ", err);
    return null;
  }
}

export const postApi = {
  getList,
};
