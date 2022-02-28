

import { React } from 'react';
import { Button, Buttons, Navigation, ReisterButton } from "./LandingPage-Styled";



//TODOS: 


export function LandingMenu() {
  return (
    <Navigation>
      <h1>Stock App</h1>
     <Buttons>
          
            <a href='/'>
             <Button>Login</Button>
            </a>
          
          
            <a href='/'>
              <ReisterButton> Register</ReisterButton>
            </a>
        </Buttons>
        
      
      
    </Navigation>
  )
}
