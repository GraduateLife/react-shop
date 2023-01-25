import { Grid } from "@chakra-ui/react";
import PreviewCard from "../../components/category.component/preview-card";

export default function CategoryPage() {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <PreviewCard></PreviewCard>
        <PreviewCard></PreviewCard>
        <PreviewCard></PreviewCard>
        <PreviewCard></PreviewCard>
        <PreviewCard></PreviewCard>
      </Grid>
    </>
  );
}
