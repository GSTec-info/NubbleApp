import { useAppTheme } from "../../hooks/useAppTheme";
import type { ThemeColors } from "../../theme/theme";

import AppIcon from "../../assets/icons/AppIcon";
import ArrowLeftIcon from "../../assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import BellIcon from "../../assets/icons/BellIcon";
import BellOnIcon from "../../assets/icons/BellOnIcon";
import BookmarkFillIcon from "../../assets/icons/BookmarkFillIcon";
import BookmarkIcon from "../../assets/icons/BookmarkIcon";
import CameraClickIcon from "../../assets/icons/CameraClickIcon";
import CameraIcon from "../../assets/icons/CameraIcon";
import ChatIcon from "../../assets/icons/ChatIcon";
import ChatOnIcon from "../../assets/icons/ChatOnIcon";
import CheckIcon from "../../assets/icons/CheckIcon";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import CommentIcon from "../../assets/icons/CommentIcon";
import EyeOffIcon from "../../assets/icons/EyeOffIcon";
import EyeOnIcon from "../../assets/icons/EyeOnIcon";
import FlashOffIcon from "../../assets/icons/FlashOffIcon";
import FlashOnIcon from "../../assets/icons/FlashOnIcon";
import HeartFillIcon from "../../assets/icons/HeartFillIcon";
import HeartIcon from "../../assets/icons/HeartIcon";
import HomeFillIcon from "../../assets/icons/HomeFillIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import LogoHorizontalBlackIcon from "../../assets/icons/LogoHorizontalBlackIcon";
import LogoHorizontalWhiteIcon from "../../assets/icons/LogoHorizontalWhiteIcon";
import LogoIcon from "../../assets/icons/LogoIcon";
import LogoSimplesIcon from "../../assets/icons/LogoSimplesIcon";
import LogoVerticalBlackIcon from "../../assets/icons/LogoVerticalBlackIcon";
import LogoVerticalWhiteIcon from "../../assets/icons/LogoVerticalWhiteIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import MoreIcon from "../../assets/icons/MoreIcon";
import NewPostIcon from "../../assets/icons/NewPostIcon";
import ProfileFillIcon from "../../assets/icons/ProfileFillIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import SendIcon from "../../assets/icons/SendIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import TrashIcon from "../../assets/icons/TrashIcon";
import { Pressable } from "react-native";

export type IconBase = {
  size?: number;
  color?: string;
};

type IconProps = {
  name: IconNames;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
};

export default function Icon({ name, color = "grayBlack", size, onPress }: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistery[name];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        hitSlop={10}>
        <SVGIcon
          size={size}
          color={colors[color]}
        />
      </Pressable>
    );
  }

  return (
    <SVGIcon
      size={size}
      color={colors[color]}
    />
  );
}

const iconRegistery = {
  appIcon: AppIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  bellon: BellOnIcon,
  bell: BellIcon,
  bookmarkFill: BookmarkFillIcon,
  bookmark: BookmarkIcon,
  cameraClick: CameraClickIcon,
  camera: CameraIcon,
  chaton: ChatOnIcon,
  chat: ChatIcon,
  check: CheckIcon,
  chevronRight: ChevronRightIcon,
  close: CloseIcon,
  comment: CommentIcon,
  eyeOff: EyeOffIcon,
  eyeOn: EyeOnIcon,
  flashOff: FlashOffIcon,
  flashOn: FlashOnIcon,
  heartFill: HeartFillIcon,
  heart: HeartIcon,
  homeFill: HomeFillIcon,
  home: HomeIcon,
  logoHorizontalBlack: LogoHorizontalBlackIcon,
  logoHorizontalWhite: LogoHorizontalWhiteIcon,
  logoIcon: LogoIcon,
  logoSimples: LogoSimplesIcon,
  logoVerticalBlack: LogoVerticalBlackIcon,
  logoVerticalWhite: LogoVerticalWhiteIcon,
  message: MessageIcon,
  more: MoreIcon,
  newPost: NewPostIcon,
  profileFill: ProfileFillIcon,
  profile: ProfileIcon,
  search: SearchIcon,
  send: SendIcon,
  settings: SettingsIcon,
  trash: TrashIcon,
};

export type IconTypes = typeof iconRegistery;
export type IconNames = keyof IconTypes;
