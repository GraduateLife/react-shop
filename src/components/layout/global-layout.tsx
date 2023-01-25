import { Container } from "@chakra-ui/react";

export default function GlobalLayout(props: any) {
  return (
    <Container centerContent maxW="container.xl">
      {props.children}
    </Container>
  );
}
