import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import ShopPage from './Pages/ShopPage/ShopPage'
import SignInPage from './Pages/SignInPage/SignInPage'
import Header from './Components/Header/Header'
import { auth } from './firebase/firebase.utils'

import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }


  render() {
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
}

export default App
