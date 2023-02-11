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
import { CartIcon } from "./cart-icon";
import CartList from "./cart-list";
import { CartParams } from "./component-parameters";

//FIXME - saga

//memoized
function CartComponent() {
  let cartList = useSelector(selectCartList);
  // const cartList: CartItem[] = [];
  const cartOverallQuantity = useSelector(selectCartOverallQuantity);
  const cartOverallPrice = useSelector(selectCartOverallPrice);

  const [cartListIsPending, setCartListIsPending] = useState(false);
  let disPlayHeight =
    cartList && cartList.length > CartParams.CART_ITEM_DISPLAY_UP_LIMIT
      ? 75 * CartParams.CART_ITEM_DISPLAY_UP_LIMIT
      : "whatever";
  let popOverHeightShouldBe = cartListIsPending
    ? CartParams.CART_EMPTY_SIZE
    : disPlayHeight;

  const handleCartIconBtnClick = () => {
    setCartListIsPending(true);
    setTimeout(() => {
      setCartListIsPending(false);
    }, 1500);
  };
  const handlePopoverClose = () => {
    //TODO - write to fb
    console.log("cl");
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
          variant="invisible"
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
            h={`${popOverHeightShouldBe}`}
            overflowY={"auto"}
          >
            {cartListIsPending === true ? (
              <Flex
                w={"100%"}
                h={`${CartParams.CART_EMPTY_SIZE}`}
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
            Overall Price: £ {cartOverallPrice}
            <Flex mt={2} justify={"center"}>
              <Button
                colorScheme={"cyan"}
                color="white"
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

export default React.memo(CartComponent);
