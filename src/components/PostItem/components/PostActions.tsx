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
        marked={reactionCount > 0}
        onPress={likePost}
        text={reactionCount}
      />
      <ItemAction
        icon={{
          default: "comment",
          marked: "chat",
          color: "backgroundContrast",
        }}
        onPress={navigateToComment}
        text={commentCount}
        marked={commentCount > 0}
      />
      <ItemAction
        icon={{
          default: "bookmark",
          marked: "bookmarkFill",
          color: "backgroundContrast",
        }}
        onPress={favoritePost}
        text={favoriteCount}
        marked={favoriteCount > 0}
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
          color="backgroundContrast"
          bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
