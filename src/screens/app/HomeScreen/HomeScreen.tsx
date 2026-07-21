import { Box, PostItem, Screen } from "@components";
import { type Post, postService } from "@domain";

import type { AppTabScreenProps } from "@routes";

import { useEffect, useState } from "react";
import type { ListRenderItemInfo, StyleProp, ViewStyle } from "react-native";
import { FlatList } from "react-native";

type HomeScreenProps = AppTabScreenProps<"HomeScreen">;

export function HomeScreen({ navigation }: HomeScreenProps) {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then((list) => setPostList(list));
  }, []);

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return (
      <Box paddingHorizontal="s24">
        <PostItem post={item} />
      </Box>
    );
  }

  return (
    <Screen style={$styleScreen}>
      <FlatList
        data={postList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
}

const $styleScreen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
