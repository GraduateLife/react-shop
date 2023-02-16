import { HStack, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import BrandLogo from "../../assets/brand-logo";

export default function BrandDisplay() {
  const [isDesktop] = useMediaQuery("(min-width: 1280px)");
  return (
    <HStack>
      {/* //LINK - logo */}
      <BrandLogo boxSize={16} color={"brand"} />
      {/* //LINK - brand name */}
      {isDesktop && (
        <Text fontFamily="Tangerine" fontSize={"56"} color="shadow.heavy">
          WildHeart
        </Text>
      )}
    </HStack>
  );
}
