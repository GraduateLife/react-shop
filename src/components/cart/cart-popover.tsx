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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../models/cargo.type";

import {
  selectCartListData,
  selectCartOverallPrice,
  selectCartOverallQuantity,
  selectCartRequestStatus,
} from "../../store/cart/cart-list.selector";
import { fetchCartList } from "../../store/cart/cart-list.slice";
import { AppDispatch } from "../../store/store";
import { selectUserData } from "../../store/user/user.selector";
import LoadingSpinner from "../layout/loading-spinner";
import { CartIcon } from "./cart-icons";

import CartList from "./cart-list";
import { CART_BEHAVIORS } from "./component-behaviors";

//memoized
function CartPopover() {
  const dispatch = useDispatch<AppDispatch>();
  const currUser = useSelector(selectUserData);

  let cartList = useSelector(selectCartListData);
  const cartFetchStatus = useSelector(selectCartRequestStatus);
  const cartOverallQuantity = useSelector(selectCartOverallQuantity);
  const cartOverallPrice = useSelector(selectCartOverallPrice);
  // const [cartListIsPending, setCartListIsPending] = useState(false);

  const handleCartIconBtnClick = async () => {
    if (cartFetchStatus === "idle") {
      const res = await dispatch(fetchCartList(currUser.UserEmail));
      cartList = res.payload as CartItem[];
      console.log(res);
    }
  };

  const navigate = useNavigate();
  const handleCheckoutBtnClick = () => {
    navigate("/checkout");
  };
  return (
    <Popover placement="bottom-start" isLazy>
      {/* //LINK - cart icon btn */}
      <PopoverTrigger>
        <IconButton
          variant="invisible-active"
          aria-label="open shopping cart"
          icon={<CartIcon />}
          isDisabled={currUser.UserIsLoggedIn === false}
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
            {cartFetchStatus === "loading" ? (
              <Flex
                w={"100%"}
                h={`${CART_BEHAVIORS.CART_EMPTY_HEIGHT}`}
                justify={"center"}
                align={"center"}
              >
                <LoadingSpinner />
              </Flex>
            ) : (
              <CartList cartList={cartList ?? ([] as CartItem[])} />
            )}
          </PopoverBody>
          {/* LINK dropdown footer, checkout button */}
          <PopoverFooter border={"none"}>
            Overall Price: £ &nbsp;
            {cartFetchStatus === "loading" ? "--" : cartOverallPrice}
            <Flex mt={2} justify={"center"}>
              <Button
                colorScheme={"cyan"}
                color="white"
                isLoading={cartFetchStatus === "loading"}
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

export default CartPopover;
