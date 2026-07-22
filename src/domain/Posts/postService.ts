import { postAdapter } from "./postAdapter";
import { postApi } from "./postApi";
import type { Post } from "./postTypes";

async function getList(): Promise<Post[] | undefined> {
  const postPageAPI = await postApi.getList();
  return postPageAPI?.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};
