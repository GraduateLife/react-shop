import { Box, ButtonGroup, IconButton } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CartPopover from "../cart/cart-popover";
import { ShopIcon, SignOutIcon, UserIcon } from "./navbar-icons";
import SignOutButton from "./sign-out-button";

//to change cart icon, please go to cart component folder
export default function NavbarButtons() {
  return (
    <Box>
      <ButtonGroup variant={"invisible-active"} mx={4} gap={2}>
        {/* //LINK - link to all products page */}
        <Link to="/products">
          <IconButton aria-label="go to products page" icon={<ShopIcon />} />
        </Link>
        {/* //LINK - link to sign in page */}
        <Link to="/sign-in">
          <IconButton aria-label="sign in or sign up" icon={<UserIcon />} />
        </Link>
      </ButtonGroup>
      {/* STUB cart component is here! */}
      <CartPopover />
      <SignOutButton ml={4} />
    </Box>
  );
}
