import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import ShopPage from './Pages/ShopPage/ShopPage'
import SignInPage from './Pages/SignInPage/SignInPage'
import Header from './Components/Header/Header'
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} ></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' component={SignInPage}></Route>
      </Switch>
    </div>
  );
}

export default App
