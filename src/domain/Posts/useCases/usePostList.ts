import { useEffect, useState } from "react";
import { postService } from "../postService";
import type { Post } from "../postTypes";

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);

      const list = await postService.getList();

      setPostList(list);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    error,
    postList,
    refetch: fetchData,
  };
}
