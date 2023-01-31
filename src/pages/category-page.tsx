import { GridItem, Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import PreviewCard from "../components/category.component/preview-card";
import { fetchAllCategories } from "../__DUMMY__DATA__/category/queries";
import { useEffect, useState } from "react";
import { Category } from "../models/category.type";

//FIXME - redux integration

export default function CategoryPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    setCategories(fetchAllCategories());
  }, []);

  return (
    <>
      <Box>Start your shopping!</Box>
      <SimpleGrid columns={3} gap={4}>
        {categories.length > 0 ? (
          categories.map(({ categoryName, imageUrl }) => {
            return (
              <GridItem key={categoryName}>
                <PreviewCard
                  previewImageUrl={imageUrl}
                  categoryName={categoryName}
                ></PreviewCard>
              </GridItem>
            );
          })
        ) : (
          <Spinner />
        )}
      </SimpleGrid>
    </>
  );
}
