import React from 'react';
import styled from 'styled-components';
import SearchBar from './search-bar';
import Wrapper from './wrapper';
const ActionsStyled = styled.div`
.grid{
  display: grid;
grid-template-columns: 1fr;
}

`
function Actions() {
  return (
    <ActionsStyled>
      <Wrapper>
        <div class="grid">
          <SearchBar />
        </div>

      </Wrapper>
    </ActionsStyled>
  )
}
export default Actions;