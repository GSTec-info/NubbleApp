import { Svg, Path, Circle } from "react-native-svg";
import type { IconBase } from "../../components/Icon";
import { palette } from "../../theme/theme";

export default function Icon({ size, color = palette.redError }: IconBase) {
  return (
    <Svg
      width={size || 48}
      height={size || 48}
      viewBox="0 0 48 48"
      fill="none">
      <Circle
        cx="24"
        cy="24"
        r="24"
        fill={color || "#000000"}
      />
      <Path
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        d="M15 15.0004L31.2279 31.9996M15.7728 32L32 15"
      />
    </Svg>
  );
}
