import { Box, Icon, type IconProps, Text, TouchableOpacityBox } from "@components";
import type { Post } from "@domain";

type Props = Pick<Post, "reactionCount" | "favoriteCount" | "commentCount">;
export function PostActions({ commentCount, favoriteCount, reactionCount }: Props) {
  function likePost() {
    // TODO: Implemantar
  }

  function navigateToComment() {
    //TODO: Implementar
  }

  function favoritePost() {
    //TODO: Implementar
  }

  return (
    <Box
      flexDirection="row"
      marginTop="s16"
      gap="s24">
      <ItemAction
        icon={{
          default: "heart",
          marked: "heartFill",
          color: "marked",
        }}
        marked
        onPress={likePost}
        text={reactionCount}
      />
      <ItemAction
        icon={{
          default: "comment",
          marked: "comment",
        }}
        onPress={navigateToComment}
        text={commentCount}
      />
      <ItemAction
        icon={{
          default: "bookmark",
          marked: "bookmarkFill",
        }}
        onPress={favoritePost}
        text={favoriteCount}
      />
    </Box>
  );
}

type ItemActionProps = {
  onPress: () => void;
  icon: {
    default: IconProps["name"];
    marked: IconProps["name"];
    color?: IconProps["color"];
  };
  marked?: boolean;
  text: number;
};

function ItemAction({ icon, onPress, marked, text }: ItemActionProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row">
      <Icon
        name={marked ? icon.marked : icon.default}
        color={icon.color ?? undefined}
      />
      {text > 0 && (
        <Text
          marginLeft="s4"
          preset="paragraphSmall"
          bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
