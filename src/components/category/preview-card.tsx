import { Button, Flex } from "@chakra-ui/react";

type IProp = {
  previewImageUrl: string;
  categoryName: string;
};

export default function PreviewCard({ previewImageUrl, categoryName }: IProp) {
  return (
    // LINK - bg-image
    <Flex
      align="center"
      justify="center"
      h={"inherit"}
      w={"inherit"}
      bgImage={previewImageUrl}
      bgRepeat="no-repeat"
      bgSize="100%"
    >
      {/* //LINK - button */}
      <Button colorScheme={"whiteAlpha"}>{categoryName.toUpperCase()}</Button>
    </Flex>
  );
}
