import { Box, Button, PostActions, PostHeader, PostImage, Screen, Text } from "@components";
import { type Post, postService } from "@domain";

import type { AppTabScreenProps } from "@routes";

import { useEffect, useState } from "react";
import type { ListRenderItemInfo } from "react-native";
import { FlatList } from "react-native";

type HomeScreenProps = AppTabScreenProps<"HomeScreen">;

export function HomeScreen({ navigation }: HomeScreenProps) {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then((list) => setPostList(list));
  }, []);

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return (
      <Box marginBottom="s24">
        <PostHeader author={item.author} />
        <PostImage imageURL={item.imageURL} />
        <PostActions
          commentCount={item.commentCount}
          favoriteCount={item.favoriteCount}
          reactionCount={item.reactionCount}
        />
      </Box>
    );
  }

  return (
    <Screen>
      <FlatList
        data={postList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
}
