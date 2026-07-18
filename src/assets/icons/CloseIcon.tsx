import { Svg, Path } from "react-native-svg";
import type { IconBase } from "../../components/Icon/Icon";

export default function Icon({ size, color }: IconBase) {
  return (
    <Svg
      width={size || 20}
      height={size || 20}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M1.5 1.50039L17.7279 18.4996M2.27276 18.5L18.5 1.5"
        stroke={color || "#FFFFFF"}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  );
}
