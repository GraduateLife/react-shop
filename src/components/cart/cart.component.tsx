import {
  Button,
  Flex,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "./cart-icon";
import CartList from "./cart-list";

export default function CartComponent() {
  const navigate = useNavigate();

  const handleCheckoutNavigate = () => {
    alert("writing latest cart information to firebase...");
    navigate("/checkout");
  };
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <IconButton
          variant="invisible"
          aria-label="open shopping cart"
          icon={<CartIcon />}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader border={"none"} fontWeight={600}>
            Here are the things you want
          </PopoverHeader>

          <PopoverBody>
            <CartList />
          </PopoverBody>
          <PopoverFooter border={"none"}>
            <Flex justify={"center"}>
              <Button
                colorScheme={"yellow"}
                color="white"
                onClick={() => handleCheckoutNavigate()}
              >
                checkout
              </Button>
            </Flex>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
