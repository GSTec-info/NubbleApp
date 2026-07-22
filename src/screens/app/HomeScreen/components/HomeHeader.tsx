import { Box, type BoxProps, Icon } from "@components";
import { useAppSafeArea } from "@hooks";

export function HomeHeader() {
  const { top } = useAppSafeArea();
  return (
    <Box
      {...$boxWrapper}
      style={{ paddingTop: top }}>
      <Box>
        <Icon
          name="logoSimples"
          size={50}
          color="backgroundContrast"
        />
      </Box>
      <Box
        flexDirection="row"
        gap="s24">
        <Icon
          name="search"
          color="backgroundContrast"
        />
        <Icon
          name="bell"
          color="backgroundContrast"
        />
        <Icon
          name="chat"
          color="backgroundContrast"
        />
      </Box>
    </Box>
  );
}

const $boxWrapper: BoxProps = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "s24",
  paddingHorizontal: "s24",
};
