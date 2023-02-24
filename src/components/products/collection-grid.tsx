import { GridItem, Text } from "@chakra-ui/react";

import { PRODUCTS_DADA } from "../../assets/PRODUCTS_DATA";
import ResponsiveGrid from "../layout/responsive-grid";
import ProductCard from "./product-card";

type IProp = {
  categoryName: string;
};

export default function ProductsGrid({ categoryName }: IProp) {
  if (categoryName !== "all") {
    const filteredProdList = PRODUCTS_DADA.filter(
      (item) => item.ProdBelongsTo === categoryName
    );
    return (
      <>
        <Text display={"block"} mb={6}>
          There are {filteredProdList.length} products in total
        </Text>
        <ResponsiveGrid desktopCol={4} mobileCol={1} gap={10}>
          {filteredProdList.map((prod) => (
            <GridItem key={prod.ProdId}>
              <ProductCard product={prod} />
            </GridItem>
          ))}
        </ResponsiveGrid>
      </>
    );
  } else {
    return (
      <>
        <Text display={"block"} mb={6}>
          There are {PRODUCTS_DADA.length} products in total
        </Text>

        <ResponsiveGrid desktopCol={4} mobileCol={1} gap={10}>
          {PRODUCTS_DADA.map((prod) => (
            <GridItem key={prod.ProdId}>
              <ProductCard product={prod} />
            </GridItem>
          ))}
        </ResponsiveGrid>
      </>
    );
  }
}
