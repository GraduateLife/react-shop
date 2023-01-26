import { Grid, GridItem } from "@chakra-ui/react";
import PreviewCard from "../../components/category.component/preview-card";
import { AllCategories } from "__DUMMY__DATA__/category/queries";

export default function CategoryPage() {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {AllCategories.map((item) => {
          return (
            <GridItem key={item.categoryName}>
              <PreviewCard
                previewImageUrl={item.imageUrl}
                categoryName={item.categoryName}
              ></PreviewCard>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
