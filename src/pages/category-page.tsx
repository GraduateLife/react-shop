import { GridItem, Heading } from "@chakra-ui/react";
import PreviewCard from "../components/category/preview-card";
import { fetchAllCategories } from "../__DUMMY__DATA__/category/queries";
import { useEffect, useState } from "react";
import { Category } from "../models/category.type";
import SuperBigSpinner from "../components/layout/super-big-spinner";
import ResponsiveGrid from "../components/layout/responsive-grid";

//FIXME - redux-saga async shit
//STUB - dummy async ready
export default function CategoryPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    setTimeout(() => setCategories(fetchAllCategories()), 700);
  }, []);

  if (categories.length > 0) {
    return (
      <>
        <Heading my={12}>Start your shopping!</Heading>
        <ResponsiveGrid desktopCol={3} mobileCol={1} gap={4}>
          {categories.map(({ categoryName, imageUrl }) => {
            return (
              <GridItem h={"64"} w={"96"} key={categoryName}>
                <PreviewCard
                  previewImageUrl={imageUrl}
                  categoryName={categoryName}
                ></PreviewCard>
              </GridItem>
            );
          })}
        </ResponsiveGrid>
      </>
    );
  }
  //FIXME - move to global layout
  return <SuperBigSpinner />;
}
