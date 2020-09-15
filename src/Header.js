import React from 'react'
import styled from 'styled-components'
const HeaderStyled = styled.div`
display: grid;
background: white;
color: black;

`

function Header() {

  return (
    <HeaderStyled>
      <p>Covid-19|Mundo</p>
    </HeaderStyled>
  )
}
export default Header