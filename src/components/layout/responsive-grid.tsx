import { Grid, GridProps, useMediaQuery } from "@chakra-ui/react";

type ResGridProp = {
  desktopCol: number;
  mobileCol: number;
  children: React.ReactNode;
} & GridProps;
//FIXME - 并不是十分响应式
export default function ResponsiveGrid({
  desktopCol,
  mobileCol,
  children,
  ...rest
}: ResGridProp) {
  const [isDesktop] = useMediaQuery("(min-width: 800px)");
  const gridCols = isDesktop
    ? `repeat(${desktopCol}, 1fr)`
    : `repeat(${mobileCol}, 1fr)`;
  return (
    <Grid templateColumns={gridCols} {...rest}>
      {children}
    </Grid>
  );
}
