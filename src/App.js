import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './Pages/HomePage/HomePage'
import ShopPage from './Pages/ShopPage/ShopPage'
import SignInPage from './Pages/SignInPage/SignInPage'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage'

import Header from './Components/Header/Header'

import { selectCurrentUser } from './redux/user/user.selectors'

import './App.css';


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth)

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       })
    //     })
    //   }
    //   setCurrentUser(userAuth)
    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInPage />
                )} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})


export default connect(mapStateToProps)(App)
