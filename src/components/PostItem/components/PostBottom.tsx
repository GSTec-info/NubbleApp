import { Box, Text, TouchableOpacityBox } from "@components";
import type { Post } from "@domain";

type Props = Pick<Post, "author" | "commentCount" | "text">;

export function PostBottom({ author, text: textPost, commentCount }: Props) {
  const textCountComments = getTextComment(commentCount);

  return (
    <Box marginVertical="s16">
      <Text
        semiBold
        preset="paragraphMedium"
        color="backgroundContrast">
        {author.userName}
      </Text>

      <Text
        semiBold
        color="gray1"
        preset="paragraphSmall">
        {textPost}
      </Text>

      {commentCount > 0 && (
        <TouchableOpacityBox marginTop="s14">
          <Text
            preset="paragraphSmall"
            bold
            color="primary">
            {textCountComments}
          </Text>
        </TouchableOpacityBox>
      )}
    </Box>
  );
}

function getTextComment(commentCount: number): string | null {
  if (commentCount === 1) return `ver ${commentCount} comentário`;
  if (commentCount > 1) return `ver ${commentCount} comentários`;

  return null;
}
