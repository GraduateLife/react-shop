import { Flex, IconButton, Icon, Image, Box, Text } from "@chakra-ui/react";
import React from "react";

import { VscChevronUp, VscChevronDown } from "react-icons/vsc";
type ItemProp = {
  imageUrl: string;
  productName: string;
  itemAmount: number;
};

function CartListItem({ imageUrl, productName, itemAmount }: ItemProp) {
  console.log("cart list item rendered");
  return (
    <Flex justify={"space-around"} align={"center"} my={"1"}>
      <Image boxSize={70} src={imageUrl} />
      <Box flex={1} width={20} px={6}>
        <Text fontSize={"2xl"} noOfLines={2}>
          {productName}
        </Text>
      </Box>
      <Flex direction={"column"} align={"center"}>
        <IconButton
          boxSize={4}
          variant="invisible"
          aria-label="Amount up"
          icon={<Icon as={VscChevronUp} color={"black"} />}
        />
        <Text fontSize={"md"}>{itemAmount}</Text>
        <IconButton
          boxSize={4}
          variant="invisible"
          aria-label="Amount down"
          icon={<Icon as={VscChevronDown} color={"black"} />}
        />
      </Flex>
    </Flex>
  );
}

export default React.memo(CartListItem);
