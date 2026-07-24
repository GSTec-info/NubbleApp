import { Box, PostItem, Screen } from "@components";
import { type Post, usePostList } from "@domain";

import type { AppTabScreenProps } from "@routes";

import type { ListRenderItemInfo, StyleProp, ViewStyle } from "react-native";
import { FlatList } from "react-native";
import { HomeEmpty } from "./components/HomeEmpty";
import { HomeHeader } from "./components/HomeHeader";

type HomeScreenProps = AppTabScreenProps<"HomeScreen">;

export function HomeScreen({ navigation }: HomeScreenProps) {
  const { loading, error, postList, refetch } = usePostList();

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
        showsVerticalScrollIndicator={false}
        data={postList}
        renderItem={renderItem}
        contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={HomeHeader}
        ListEmptyComponent={
          <HomeEmpty
            refetch={refetch}
            error={error}
            loading={loading}
          />
        }
      />
    </Screen>
  );
}

const $styleScreen: StyleProp<ViewStyle> = {
  flex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
