import { postApi } from "./postApi";
import type { Post } from "./postTypes";

async function getList(): Promise<Post[]> {
  const postList = await postApi.getList();
  return postList;
}

export const postService = {
  getList,
};
