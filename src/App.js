import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryList from './country_list';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import Actions from './actions'
import Header from './Header'
import Home from './home'

import CountryDetails from './country-details'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import { useFirebaseApp } from 'reactfire'


const initialState = {
  countryList: [],
  countryListFilter: [],
  searchFilter: ''
}


const store = createStore(reducer, initialState)
function App() {

  return (
    <Router>
      <Provider store={store}>

        <div className="App">
          <Header />
          <Switch>
            <Route path="/mundo/:id" component={CountryDetails} />


            <Route path="/">
              <Actions />
              <CountryList />
            </Route>

          </Switch>

        </div>
      </Provider>
    </Router>

  );
}

export default App;
