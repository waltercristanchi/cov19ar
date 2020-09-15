import React, { Children } from "react"
import styled from "styled-components"

const WrapperStyled = styled.div`
max-width: 1280px;
margin: auto;
padding: 0 1em;
`
function Wrapper({ children }) {
  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}
export default Wrapper