import { Box, Text } from "@components";
import type { Post } from "@domain";
import { Image } from "react-native";

type Props = Pick<Post, "author">;

export function PostHeader({ author }: Props) {
  return (
    <Box
      flexDirection="row"
      marginBottom="s16"
      alignItems="center">
      <Image
        source={{ uri: author.profileURL }}
        style={{ width: 32, height: 32, borderRadius: 16 }}
      />
      <Text
        marginLeft="s12"
        semiBold
        preset="paragraphMedium"
        color="backgroundContrast">
        {author.name}
      </Text>
    </Box>
  );
}
