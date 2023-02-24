import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  Button,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Product } from "../../models/cargo.type";
import { ACTION_PLUS } from "../../store/cart/cart-list.slice";
import { selectUserData } from "../../store/user/user.selector";

type IProp = {
  product: Product;
};

// { product }: IProp
function ProductCard({ product }: IProp) {
  const { ProdDescription, ProdName, ProdPrice, ProdImageUrl } = product;
  const loginState = useSelector(selectUserData).UserIsLoggedIn;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const handleAddCartBtnClick = () => {
    if (!loginState) {
      toast({
        position: "top",
        description:
          "You haven't logged in yet, we have lead you to the sign in page",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      navigate("/sign-in");
    } else dispatch(ACTION_PLUS(product));
  };
  const handleBuyNowBtnClick = () => {
    if (!loginState) {
      toast({
        position: "top",
        description:
          "You haven't logged in yet, we have lead you to the sign in page",
        status: "info",
        duration: 3000,
        isClosable: true,
      });

      navigate("/sign-in");
    } else {
      dispatch(ACTION_PLUS(product));
      navigate("/checkout");
    }
  };

  return (
    <Card maxW="sm">
      <CardBody display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Image
          src={ProdImageUrl}
          alt={ProdName}
          borderRadius="lg"
          bgPos={"center"}
          w={"90%"}
          h={"40vh"}
        />
        <Stack mt={8} spacing="3" w={"100%"} h={"20vh"}>
          <Heading noOfLines={2}>{ProdName.toUpperCase()}</Heading>
          <Text noOfLines={3}>{ProdDescription}</Text>
        </Stack>
        <Text display={"block"} w={"100%"} color="purple.400" fontSize="2xl">
          £ {ProdPrice}
        </Text>
      </CardBody>
      <Divider />
      <CardFooter display={"flex"} justify={"space-between"}>
        <Button variant="solid" onClick={() => handleBuyNowBtnClick()}>
          Buy now
        </Button>
        <Button
          variant="ghost"
          colorScheme="blue"
          onClick={() => handleAddCartBtnClick()}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default React.memo(ProductCard);
