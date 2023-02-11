import { Button, Flex } from "@chakra-ui/react";
import { Category } from "../../models/category.type";

type IProp = {
  category: Category;
};

export default function PreviewCard({ category }: IProp) {
  const { CateName, CateImageUrl } = category;
  return (
    // LINK - bg-image
    <Flex
      align="center"
      justify="center"
      h={"inherit"}
      w={"inherit"}
      bgImage={CateImageUrl}
      bgRepeat="no-repeat"
      bgSize="100%"
    >
      {/* //LINK - button */}
      <Button colorScheme={"whiteAlpha"}>{CateName.toUpperCase()}</Button>
    </Flex>
  );
}
