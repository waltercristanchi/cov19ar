export default function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case 'SET_COUNTRY_LIST': {
      return { ...state, countryList: action.payload }
      return { ...state, countryList: action.payload, filteredCountryList: action.payload }
    }
    case 'FILTER_BY_SEARCH': {
      const searchFilter = action.payload
      console.log(state)
      if (searchFilter.length > 0) {
        const countryListFilter = state.countryList.filter((country) => {

          return country.countryregion.toLowerCase().includes(searchFilter.toLowerCase());
        })

        return { ...state, countryListFilter, searchFilter }
      }

      return { countryListFilter: [], searchFilter: 'None' }

    }

    default: {
      return state
    }
  }
  return state
}