import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/products/collection-grid";

export default function ProductsPage() {
  const param = useParams();
  //only render the products user selected (''means all products)
  if (param["*"]) {
    return (
      <>
        <Box w={"100%"} my={"4"}>
          <Heading>{param["*"].toUpperCase()}</Heading>
        </Box>

        <ProductGrid categoryName={param["*"]} />
      </>
    );
  } else {
    return (
      <>
        <Box w={"100%"} my={"4"}>
          <Heading>All products</Heading>
        </Box>
        <ProductGrid categoryName={"all"} />
      </>
    );
  }
}
