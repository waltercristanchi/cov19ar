import React from 'react'
import styled from 'styled-components'

const CountryDetailsStyled = styled.div`

`
function CountryDetails({ match }) {
  console.log(match)
  return (
    <CountryDetailsStyled>
      CountryDetails
      {match.params.id}
    </CountryDetailsStyled>
  )
}
export default CountryDetails