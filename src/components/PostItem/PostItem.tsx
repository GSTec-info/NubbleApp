import { Box, PostActions, PostBottom, PostHeader, PostImage } from "@components";
import type { Post } from "@domain";

type Props = {
  post: Post;
};

export function PostItem({ post }: Props) {
  return (
    <Box marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
    </Box>
  );
}
