import React from 'react';
import {LandingMenu} from './LandingMenu';
import {AppConteiner } from './LandingPage-Styled';


function LandingPage() {
  return (
   <AppConteiner>
        <LandingMenu  />
      <div className="landing-page__heading">
        <h1>MEET THE NEW STANDARDS FOR MARKET TRADING</h1>
        
      </div>
    </AppConteiner>
   
  )
}

export default LandingPage;
