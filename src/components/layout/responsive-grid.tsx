import { Grid, useMediaQuery } from "@chakra-ui/react";
import react from "react";

type GridProp = {
  desktopCol: number;
  mobileCol: number;
  children: React.ReactNode;
};

export default function ResponsiveGrid<P extends GridProp>({
  desktopCol,
  mobileCol,
  children,
  ...rest
}: P) {
  const [isDesktop] = useMediaQuery("(min-width: 1280px)");
  const gridCols = isDesktop
    ? `repeat(${desktopCol}, 1fr)`
    : `repeat(${mobileCol}, 1fr)`;
  return (
    <Grid templateColumns={gridCols} {...rest}>
      {children}
    </Grid>
  );
}
