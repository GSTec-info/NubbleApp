import { api, type PageAPI, type PageParams } from "@api";
import type { PostAPI } from "./postTypes";

const USERNAME_TEST = "mariajulia@coffstack.com";
const PASSWORD_TEST = "supersecret";

type ResponseAPI = PageAPI<PostAPI>;

async function getList(params?: PageParams): Promise<ResponseAPI> {
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
      params,
    });

    // await new Promise((resolve) => setTimeout(() => resolve(""), 5000));

    // throw new Error("Erro de test");

    return responsePost.data;
  } catch (err) {
    console.log("=== ERRO EM 'getList': ", err);
    return {} as ResponseAPI;
  }
}

export const postApi = {
  getList,
};
