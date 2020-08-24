import React from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import ShopPage from './Pages/ShopPage/ShopPage'
import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} ></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
