import React from 'react'
import styled from 'styled-components'
import {
  Link

} from 'react-router-dom'
const HeaderStyled = styled.div`
display: grid;
@media screen and (min-width: 768px) {
  align-items: center;

  ul{
    text-align: left;
  }
  grid-template-columns: 320px 1fr;
  li{
    display: inline-flex;
    text-align: left;
    margin: .1em 1em;
  }
  ul a{
    font-size: .9em;
  }
}
background: white;
a{
  
  font-size: .7em;
  color: black;
  text-decoration:none;

}

`

function Header() {


  return (
    <HeaderStyled>
      <Link to="/"> <h1>Resumen Covid-19 | Mundo</h1></Link>
      <ul>
        <Link to="/"> <li>Inicio</li></Link>
        <Link to="/mundo"><li>Mundo</li></Link>
      </ul>
    </HeaderStyled>
  )
}
export default Header