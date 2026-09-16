import React from "react";
import Hero from "./hero";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";
import Universe from "./universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="../media/images/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform. Simple and elegant, it is designed for both novice and experienced traders."
        tryDemo="https://kite.trade"
        learnMore="/products"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/app/kite/id1449522573"
      />
      <RightSection
        imageURL="../media/images/console.png"
        productName="Console"
        productDesription="The backoffice dashboard for our clients. Track your portfolio, reports, and funds, with in-depth statistics and auto-generated tax reports."
        learnMore="/products"
      />
      <LeftSection
        imageURL="../media/images/coin.png"
        productName="Coin"
        productDesription="Buy 100% commission-free direct mutual funds. Invest in an eligible mutual fund and instantly get a loan against it."
        tryDemo="/products"
        learnMore="/products"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/app/coin/id1204791223"
      />
      <Universe />
    </>
  );
}

export default ProductPage;
