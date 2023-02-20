import { Heading, Flex, Text, GridItem, Center } from "@chakra-ui/react";
import ResponsiveGrid from "../components/layout/responsive-grid";
import SignInForm from "../components/forms/sign-in-form";
import ProviderButtons from "../components/provider_login/provider-buttons";
import NoAccountPrompt from "../components/prompts/no-account-prompt";

//FIXME - firebase communication

export default function SignInPage() {
  return (
    <ResponsiveGrid desktopCol={2} mobileCol={1} mt={20} gap={20}>
      <GridItem>
        <Flex w={"100%"} direction={"column"} align="center" mt={4}>
          <Heading>I have an account</Heading>
          <Flex w={"100%"} direction={"column"} align="center" mt={4} px={12}>
            <SignInForm />
            <Center my={1.5}>
              <Text fontSize={"md"} color={"shadow.medium"}>
                or
              </Text>
            </Center>
            <ProviderButtons />
          </Flex>
        </Flex>
      </GridItem>
      <GridItem>
        <NoAccountPrompt />
      </GridItem>
      {/* LINK new user section*/}
    </ResponsiveGrid>
  );
}
