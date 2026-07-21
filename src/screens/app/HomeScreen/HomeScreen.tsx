import { Box, Button, PostHeader, PostImage, Screen, Text } from "@components";
import { type Post, postService } from "@domain";

import type { AppTabScreenProps } from "@routes";

import { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, type ListRenderItemInfo } from "react-native";

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
