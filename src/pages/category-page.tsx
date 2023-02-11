import { GridItem, Heading } from "@chakra-ui/react";
import PreviewCard from "../components/category/preview-card";
import { fetchAllCategories } from "../__DUMMY__DATA__/category/queries";
import { useEffect, useState } from "react";
import { Category } from "../models/category.type";

import ResponsiveGrid from "../components/layout/responsive-grid";

//FIXME - redux-saga async shit
//STUB - dummy async ready
export default function CategoryPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    setTimeout(() => setCategories(fetchAllCategories()), 700);
  }, []);

  return (
    <>
      <Heading my={12}>Start your shopping!</Heading>
      <ResponsiveGrid desktopCol={3} mobileCol={1} gap={4}>
        {categories.map((item) => {
          return (
            <GridItem h={"64"} w={"96"} key={item.CateName}>
              <PreviewCard category={item} />
            </GridItem>
          );
        })}
      </ResponsiveGrid>
    </>
  );
}
