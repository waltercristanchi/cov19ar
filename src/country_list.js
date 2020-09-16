import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Country from './country';
import { useSelector, useDispatch } from 'react-redux';
const CountryListStyled = styled.div`
display: grid;
grid-auto-flow: columns;
grid-template-columns: repeat(auto-fill, minMax(0, 320px));
grid-column-gap: 1em;
justify-content: center;
margin-top: 1em;
grid-row-gap: 1em;
background: var(--background);

`

function CountryList() {
  const dispatch = useDispatch()
  const countryList = useSelector((state) => state.countryList)
  const countryListFilter = useSelector((state) => state.countryListFilter)

  console.log('el estado es', countryList)
  // const [countryList, setCountryList] = useState([])

  useEffect(() => {
    fetch('https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true')
      .then((response) => {
        return response.json()
      })
      .then((list) => {
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: list

        })

        console.log(list.length);
        //setCountryList(data)
      })
      .catch(() => {
        console.log("error")
      })
  }, [dispatch])

  return (


    <CountryListStyled>



      {


        countryListFilter.length > 0 &&
        countryListFilter.map(({ countryregion, confirmed, recovered, deaths }) => {
          countryList.sort(function (a, b) {
            return a.confirmed - b.confirmed;
          })
          countryList.reverse();
          var flagicon = process.env.PUBLIC_URL + "/images/" + countryregion + ".png"
          return (
            <Country
              name={countryregion}
              key={countryregion}
              flag={flagicon}
              region="América"
              cases={confirmed}
              deaths={deaths}
              recovered={recovered}
            />
          )
        })
      }



      {
        countryListFilter.length < 1 &&
        countryList.map(({ countryregion, confirmed, recovered, deaths }) => {
          countryList.sort(function (a, b) {
            return a.confirmed - b.confirmed;
          })
          countryList.reverse();
          var flagicon = process.env.PUBLIC_URL + "/images/" + countryregion + ".png"
          return (
            <Country
              name={countryregion}
              key={countryregion}
              flag={flagicon}
              region="América"
              cases={confirmed}
              deaths={deaths}
              recovered={recovered}
            />
          )
        })

      }
    </CountryListStyled>
  )
}

export default CountryList
