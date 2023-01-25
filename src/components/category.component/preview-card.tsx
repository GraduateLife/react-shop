import { Box, Center, Flex, Text } from "@chakra-ui/react";
import hatImage from "../../__DUMMY__DATA__/images/hat-preview.png";
import coatImage from "../../__DUMMY__DATA__/images/coat-preview.png";
import { ThemeColors } from "../../theme/colors.settings";

export default function PreviewCard() {
  return (
    <Flex
      align="center"
      justify="center"
      h={"72"}
      w={"md"}
      bgImage={coatImage}
      bgRepeat="no-repeat"
      bgSize="100%"
    >
      <Center
        border="1px"
        borderColor={`${ThemeColors.THEME_DEFAULT}`}
        w={"32"}
        h={"12"}
        _hover={{ bg: `${ThemeColors.THEME_DEFAULT}` }}
      >
        <Text color={"white"} fontSize="2xl">
          HAT
        </Text>
      </Center>
    </Flex>
  );
}
