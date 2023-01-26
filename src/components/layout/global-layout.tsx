import { Flex } from "@chakra-ui/react";

type IProp = {
  children: React.ReactNode;
};

export default function GlobalLayout({ children }: IProp) {
  return (
    <Flex direction={"column"} align={"center"}>
      {children}
    </Flex>
  );
}
