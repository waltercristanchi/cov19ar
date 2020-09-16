import React from 'react';
import styled from 'styled-components';
import {
  useHistory
} from 'react-router-dom'
const CountryStyled = styled.div`
cursor: pointer;
text-align: left;
border-radius: 5px;
overflow: hidden;
box-shadow: 0 0 7px 2px rgba(0,0,0,.1);
img {
width: 100%;
height: 184px;
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
  var enCountries = ["US", "Brazil", "United Kingdom", "Russia",
    "South Africa", "Spain", "France", "Saudi Arabia", "Turkey", "Italy", "Philippines",
    "Germany", "Ukraine", "Dominican Republic", "Egypt", "Belgium", "Netherlands", "Sweden",
    "United Arab Emirates", "Japan", "Poland", "Singapore", "Switzerland", "Moldova",
    "Ireland", "Lebanon", "Korea, Shouth", "Denmark", "Cameroon", "North Macedonia", "Croatia", "Greece",
    "Hungary", "Norway", "Maldives", "Finland", "Luxembourg", "Equatorial Guinea", "Central African Republic",
    "Syria", "Jordan", "Tahiland", "Trinidad and Togabo", "South Sudan", "Iceland", "Sierra Leone",
    "New Zeland", "Cyprus", "Belize", "Sao Tome and Principe", "Papua New Guinea", "Antigua and Barbuda", "Saint Vincent and the Granadines",
    "Grenada"];
  var esCountries = ["Estados Unidos", "Brasil", "Reino Unido", "Rusia",
    "Sudafrica", "España", "Francia", "Arabia Saudita", "Turquia", "Italia", "Filipinas",
    "Alemania", "Ucrania", "República Dominicana", "Egipto", "Belgica", "Holanda", "Suecia",
    "Emiratos ArabesUnidos", "Japon", "Polonia", "Singapur", "Suiza", "Maldivas",
    "Irlanda", "Libano", "Corea del Sur", "Dinamarca", "Camerun", "Macedonia del Norte", "Croacia", "Grecia",
    "Hungria", "Noruega", "Maldivas", "Finlandia", "Luxemburgo", "Guinea Ecuatorial", "República Centroafricana",
    "Siria", "Jordania", "Tailandia", "Trinidad y Togabo", "Sudan del Sur", "Islandia", "Sierra Leona",
    "Nueva Zelanda", "Chipre", "Belice", "Santo Tome y Principe", "Papua Nueva Guinea", "Antigua y Barbuda", "San Vicente y las Granadinas",
    "Granada"];

  for (var i = 0; i < esCountries.length; i++) {
    if (enCountries[i] == name) {
      name = esCountries[i]
      flag = process.env.PUBLIC_URL + "/images/" + esCountries[i] + ".png"


    }
  }
  const history = useHistory()
  function handleClick() {
    history.push(`/mundo/${name}`)
  }

  return (
    <CountryStyled onClick={handleClick}>
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