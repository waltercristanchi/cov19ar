import React from 'react'
import styled from 'styled-components'
import {
  Link

} from 'react-router-dom'
const HomeStyled = styled.div`
display: grid;
background: white;
a{
  text-decoration: none;
  color: black;
  font-size: .7em;

}

`

function Home() {

  return (
    <HomeStyled>
      Home
    </HomeStyled>
  )
}
export default Home