import React from 'react';
import {LandingMenu} from './LandingMenu';
import { AppConteiner, LandingPageHeading, Image } from './LandingPage-Styled';
import Kuva from '../../media/heading.jpg'



function LandingPage() {
  return (
   <AppConteiner>
        <LandingMenu  />
      <LandingPageHeading>
        <h1>MEET THE NEW STANDARDS FOR MARKET TRADING</h1>
        <Image src={Kuva}></Image>
      </LandingPageHeading>
    
    </AppConteiner>
   
  )
}

export default LandingPage;
