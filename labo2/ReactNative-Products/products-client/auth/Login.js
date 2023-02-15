import React, { Component } from 'react'
import * as sha1 from 'js-sha1'
  
export default class Login extends Component {  
  
  constructor(props) {  
      super(props)
      this.state =  { username: '', password: '', authenticated: false }                                                           
      this.login = this.login.bind(this)
      this.handleInputChange = this.handleInputChange.bind(this)
  }
    
  login() {
    const pwd = sha1(this.state.password)
    if(this.state.username === 'test' 
            && pwd === 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3') {
      localStorage.setItem('user', JSON.stringify({ username: this.state.username, password: pwd, authenticated: true }))
      window.location.reload()
    }
    else {
      // clear user / pwd
      this.setState({ username: '', password: '' })
    }
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {  
    return (  
      'LOGIN'
    )
  }  
}
