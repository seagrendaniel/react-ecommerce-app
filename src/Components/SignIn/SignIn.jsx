import React from 'react'
import {connect} from 'react-redux'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { googleSignInStart } from '../../redux/user/user.actions'

import './SignIn.scss'

class SignIn extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const {googleSignInStart} = this.props
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="button">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn)

