import styled from "styled-components";

export const AppConteiner = styled.div`

background-color: #3179ba;

height: 100%;
padding: 20px;
width: 100%;
`

//landing menu

export const Navigation = styled.div `
background-color: red;
display: flex;
justify-content: space-between;

`
export const Buttons = styled.div`
display: flex;

`

export const Button = styled.button `
  background-color: #190c8d;
  color: #ffffff;
  font-size: 1.0em;
  font-weight: 600;
  position: relative;
  outline: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 50px;
  width: 100px;
`
export const ReisterButton = styled(Button)`
background-color: green;
`