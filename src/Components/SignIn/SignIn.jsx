import React from 'react'
import FormInput from '../FormInput/FormInput'

import './SignIn.scss'

class SignIn extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
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

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    )
  }
}

export default SignIn

