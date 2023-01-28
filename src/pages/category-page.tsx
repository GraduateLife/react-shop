import { GridItem, Box, SimpleGrid } from "@chakra-ui/react";
import PreviewCard from "../components/category.component/preview-card";
import { AllCategories } from "../__DUMMY__DATA__/category/queries";

export default function CategoryPage() {
  return (
    <>
      <Box>Start your shopping!</Box>
      <SimpleGrid columns={3} gap={4}>
        {AllCategories.map(({ categoryName, imageUrl }) => {
          return (
            <GridItem key={categoryName}>
              <PreviewCard
                previewImageUrl={imageUrl}
                categoryName={categoryName}
              ></PreviewCard>
            </GridItem>
          );
        })}
      </SimpleGrid>
    </>
  );
}
