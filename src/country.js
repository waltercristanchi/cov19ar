import React from 'react';
import styled from 'styled-components';
const CountryStyled = styled.div`
width: 320px;
text-align: left;
border-radius: 5px;
overflow: hidden;
box-shadow: 0 0 7px 2px rgba(0,0,0,.1);
img {
width: 100%;
height: 160px;
object-fit: cover;
}
.details{
  padding: 1.5em;
}
h2 {
  margin: 0;
  margin-bottom: 1rem;
  font-size: 18px;
}
p{
  font-size: .9em;
  margin: 0;
  margin-bottom: .5rem;
}
`
function Country({
  flag,
  region,
  name,
  cases,
  deaths,
  recovered


}) {
  var enCountries = ["US", "Brazil"];
  var esCountries = ["Estados Unidos", "Brasil"];

  for (var i = 0; i < esCountries.length; i++) {
    if (enCountries[i] == name) {
      name = esCountries[i]

    }
  }

  return (
    <CountryStyled>
      <img loading="lazy" src={flag} />
      <div className="details">
        <h2>{name}</h2>
        <p>Casos:<strong> {cases}</strong></p>
        <p>Muertes: <strong>{deaths}</strong></p>
        <p>Recuperados: <strong>{recovered}</strong></p>

      </div>


    </CountryStyled>
  )


}
export default Country