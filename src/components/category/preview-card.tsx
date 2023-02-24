import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
      bgPos="center"
      bgSize="100%"
    >
      {/* //LINK - button */}
      <Link to={`/products/${CateName}`}>
        <Button colorScheme={"whiteAlpha"}>{CateName}</Button>
      </Link>
    </Flex>
  );
}
