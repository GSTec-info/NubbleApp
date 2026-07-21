import type { Post } from "@domain";
import { Dimensions, Image } from "react-native";

type Props = Pick<Post, "imageURL">;

export function PostImage({ imageURL }: Props) {
  const { width: widthScreen, height: heightScreen } = Dimensions.get("screen");

  return (
    <Image
      source={{ uri: imageURL }}
      resizeMode="cover"
      style={{ width: widthScreen, height: heightScreen * 0.45, marginHorizontal: -24 }}
    />
  );
}
