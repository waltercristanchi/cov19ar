import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const SearchBarStyled = styled.div`
display: inline-flex;
width: 100%;
background: white;
align-items: center;
margin-top: 1em;
box-shadow: 0 2px 9px 0 rgba(0,0,0,.1);
border-radius: 5px;


i{
  margin: 0 .5em;
  color: #c4c4c4

}


input{
 height: 48px;

  flex: 1;
border: none;
font-size: 1em;

&::-webkit-input-placeholder {
  color:#c4c4c4;

}
}
input:focus {
    outline: none !important;
}

`


function SearchBar() {
  const dispatch = useDispatch()
  const searchFilter = useSelector((state) => state.searchFilter)

  const onChangeSearch = (event) => {
    const value = event.target.value
    dispatch({
      type: 'FILTER_BY_SEARCH',
      payload: value
    })
  }

  return (
    <SearchBarStyled>
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Buscar por Pais" onKeyUp={onChangeSearch} defaultValue={searchFilter}></input>
    </SearchBarStyled>
  )
}
export default SearchBar 