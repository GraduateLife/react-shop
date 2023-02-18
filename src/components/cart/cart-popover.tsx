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

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectCartList,
  selectCartOverallPrice,
  selectCartOverallQuantity,
} from "../../store/cart/cart-list.selector";
import LoadingSpinner from "../layout/loading-spinner";
import { CartIcon } from "./cart-icons";

import CartList from "./cart-list";
import { CART_BEHAVIORS } from "./component-behaviors";

//FIXME - saga

//memoized
function CartPopover() {
  let cartList = useSelector(selectCartList);
  // const cartList: CartItem[] = [];
  const cartOverallQuantity = useSelector(selectCartOverallQuantity);
  const cartOverallPrice = useSelector(selectCartOverallPrice);
  const [cartListIsPending, setCartListIsPending] = useState(false);

  const handleCartIconBtnClick = () => {
    setCartListIsPending(true);
    setTimeout(() => {
      setCartListIsPending(false);
    }, 1500);
  };
  const handlePopoverClose = () => {
    console.log("2");
    //TODO - write to fb
  };

  const navigate = useNavigate();
  const handleCheckoutBtnClick = () => {
    alert("writing latest cart information to firebase...");
    navigate("/checkout");
  };
  return (
    <Popover
      placement="bottom-start"
      isLazy
      onClose={() => handlePopoverClose()}
    >
      {/* //LINK - cart icon btn */}
      <PopoverTrigger>
        <IconButton
          variant="invisible-active"
          aria-label="open shopping cart"
          icon={<CartIcon />}
          onClick={() => {
            handleCartIconBtnClick();
          }}
        />
      </PopoverTrigger>
      {/* //LINK dropdown start */}
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          {/*LINK //dropdown header,not important */}
          <PopoverHeader border={"none"} fontWeight={600}>
            Here are the things you want
          </PopoverHeader>
          {/* LINK dropdown body, cart items shit */}
          <PopoverBody
            p={"0"} //PopoverBody has default padding
            overflowY={"auto"}
          >
            {cartListIsPending === true ? (
              <Flex
                w={"100%"}
                h={`${CART_BEHAVIORS.CART_EMPTY_HEIGHT}`}
                justify={"center"}
                align={"center"}
              >
                <LoadingSpinner />
              </Flex>
            ) : (
              <CartList cartList={cartList} />
            )}
          </PopoverBody>
          {/* LINK dropdown footer, checkout button */}
          <PopoverFooter border={"none"}>
            Overall Price: £ {cartListIsPending ? "--" : cartOverallPrice}
            <Flex mt={2} justify={"center"}>
              <Button
                colorScheme={"cyan"}
                color="white"
                isLoading={cartListIsPending}
                onClick={() => handleCheckoutBtnClick()}
              >
                checkout({cartOverallQuantity})
              </Button>
            </Flex>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
      {/* LINK dropdown ends */}
    </Popover>
  );
}

export default React.memo(CartPopover);
