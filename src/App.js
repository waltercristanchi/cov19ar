import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryList from './country_list';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import Actions from './actions'
import Header from './Header'


const initialState = {
  countryList: [],
  countryListFilter: [],
  searchFilter: ''
}


const store = createStore(reducer, initialState)
function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <Header />
        <Actions />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
