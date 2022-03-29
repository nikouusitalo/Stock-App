import React from "react";
import { LandingMenu } from "./LandingMenu";
import { AppConteiner, LandingPageHeading, Image } from "./LandingPage-Styled";

function LandingPage() {
  return (
    <AppConteiner>
      <LandingMenu />
      <LandingPageHeading>
        <h1>MEET THE NEW STANDARDS FOR MARKET </h1>
      </LandingPageHeading>
    </AppConteiner>
  );
}

export default LandingPage;
