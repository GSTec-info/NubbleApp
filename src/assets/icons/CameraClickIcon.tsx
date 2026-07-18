import { Svg, Circle } from "react-native-svg";
import type { IconBase } from "../../components/Icon/Icon";

export default function CameraClickIcon({ size, color }: IconBase) {
  return (
    <Svg
      width={size || 80}
      height={size || 80}
      viewBox="0 0 80 80"
      fill="none">
      <Circle
        cx="40"
        cy="40"
        r="34"
        fill={color || "#FFFFFF"}
      />
      <Circle
        cx="40"
        cy="40"
        r="39"
        stroke={color || "#FFFFFF"}
        strokeWidth="2"
      />
    </Svg>
  );
}
