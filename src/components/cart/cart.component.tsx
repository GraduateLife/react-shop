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
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../models/cart-item.type";
import { fetchAllProducts } from "../../__DUMMY__DATA__/products/cartItems-list";
import LoadingSpinner from "../layout/loading-spinner";
import CartIcon from "./cart-icon";
import CartList from "./cart-list";

//FIXME - saga
//FIXME - 纯函数组件还需要拆的更加碎一点
export default function CartComponent() {
  const [cartList, setCartList] = useState<CartItem[]>(); // initialize as null, coz fetched data can be [] as well
  const [cartListIsPending, setCartListIsPending] = useState(true);
  const fetchCartRes = useMemo(() => fetchAllProducts(), []);

  const handleCartBtnClick = () => {
    setTimeout(() => setCartList(fetchCartRes), 2000);
    setCartListIsPending(false);
  };
  const navigate = useNavigate();

  const handleCheckoutNavigate = () => {
    alert("writing latest cart information to firebase...");
    navigate("/checkout");
  };
  return (
    <Popover placement="bottom-start">
      {/* //LINK - cart icon btn */}
      <PopoverTrigger>
        <IconButton
          variant="invisible"
          aria-label="open shopping cart"
          icon={<CartIcon />}
          onClick={() => {
            handleCartBtnClick();
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
          <PopoverBody>
            {cartListIsPending === true || !cartList ? (
              <Flex w={"100%"} h={"60"} justify={"center"} align={"center"}>
                <LoadingSpinner />
              </Flex>
            ) : (
              <CartList cartList={cartList} />
            )}
          </PopoverBody>
          {/* LINK dropdown footer, checkout button */}
          <PopoverFooter border={"none"}>
            <Flex justify={"center"}>
              <Button
                colorScheme={"cyan"}
                color="white"
                onClick={() => handleCheckoutNavigate()}
              >
                checkout
              </Button>
            </Flex>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
      {/* LINK dropdown ends */}
    </Popover>
  );
}
