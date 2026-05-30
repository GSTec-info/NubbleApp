import { Svg, Path } from "react-native-svg";
import type { IconBase } from "../../components/Icon";

export default function Icon({ size, color }: IconBase) {
  return (
    <Svg
      width={size || 20}
      height={size || 20}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M7 4L14 10L7 16"
        stroke={color || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
