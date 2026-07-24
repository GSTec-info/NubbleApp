import { postAdapter } from "./postAdapter";
import { postApi } from "./postApi";
import type { Post } from "./postTypes";

async function getList(): Promise<Post[]> {
  const postPageAPI = await postApi.getList();

  if (!postPageAPI) return [];

  return postPageAPI.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};
