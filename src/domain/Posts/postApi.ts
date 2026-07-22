import type { PageAPI } from "@api";
import type { PostAPI } from "./postTypes";

const URL_API = "http://192.168.18.113:3333";
const USERNAME_TEST = "mariajulia@coffstack.com";
const PASSWORD_TEST = "supersecret";

type ResponseAPI = PageAPI<PostAPI>;

async function getList(): Promise<ResponseAPI | null> {
  try {
    const login = await fetch(`${URL_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: USERNAME_TEST,
        password: PASSWORD_TEST,
        rememberMe: true,
      }),
    });

    const tokenLogin = (await login.json()).auth.token;

    const response = await fetch(`${URL_API}/user/post`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenLogin}`,
      },
    });

    const data: ResponseAPI = await response.json();

    return data;
  } catch (err) {
    console.log("=== ERRO EM 'getList': ", err);
    return null;
  }
}

export const postApi = {
  getList,
};
