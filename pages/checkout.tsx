import { NextPage } from "next";
import React from "react";
import Nav from "../components/Nav";
import { Footer } from "../components/shared/Footer";
import { Box, Container } from "@mui/material";
import PaymentDetails from "../components/PaymentDetails";
import Summary from "../components/Summary";
// import razorpay from "../components/razorpay/Buy"
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
// import Script from 'next/script'
import BuyProduct from '../components/razorpay/BuyProduct'
import Image from 'next/image'

const Checkout: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <Nav />
      {/* <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    <Script src="https://checkout.razorpay.com/v1/checkout.js"
          /> */}
      <Container>
        <Box sx={{ display: "flex" }}>
          <PaymentDetails />
          <BuyProduct/>
          <Summary />
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Checkout;
