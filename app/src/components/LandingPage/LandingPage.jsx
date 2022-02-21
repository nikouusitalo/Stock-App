import React from 'react';

function LandingPage() {
  return (
    <div className="landing-page">
    <LandingMenu name="LOGIN" url="/login" name2="REGISTER" url2="/register" />
    <div className="landing-page__heading">
      <h1>MEET THE NEW STANDARDS FOR MARKET TRADING</h1>
      
    </div>
    
  </div> 
  )
}

export default LandingPage;
