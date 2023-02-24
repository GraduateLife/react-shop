import { Box, Button, Center, Flex, useToast } from "@chakra-ui/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectCartListData,
  selectCartOverallPrice,
} from "../../store/cart/cart-list.selector";
import { selectUserData } from "../../store/user/user.selector";
import { ProceedIcon } from "./checkout-icons";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const currUser = useSelector(selectUserData);
  const overallAmount = useSelector(selectCartOverallPrice);
  const toast = useToast();
  const [isPaymentPending, setIsPaymentPending] = useState(false);
  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsPaymentPending(true);
    const res = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: overallAmount * 100 }),
    }).then((response) => response.json());

    // const token = res.paymentIntent.client_secret;
    const {
      paymentIntent: { client_secret },
    } = res;
    // console.log(token);
    const confirmedPayment = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: currUser.UserDisplayName,
        },
      },
    });
    setIsPaymentPending(false);
    if (confirmedPayment.error) {
      toast({
        position: "top",
        description:
          "Your payment was rejected for some reason, please try again later",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      if (confirmedPayment.paymentIntent.status === "succeeded") {
        toast({
          position: "top",
          description: "Your payment was successfully accepted",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Flex w={"100%"} direction={"column"} justify={"center"} align={"center"}>
      <form style={{ width: "inherit" }} onSubmit={(e) => handlePayment(e)}>
        <Box my={"12"}>
          <CardElement />
        </Box>

        <Center>
          <Button
            size={"long"}
            leftIcon={<ProceedIcon />}
            type={"submit"}
            isLoading={isPaymentPending}
          >
            Pay by credit card
          </Button>
        </Center>
      </form>
    </Flex>
  );
}
