/*
Author: Douglas Brandão dos Santos
Brazil, 10 January 2019
GitHub: https://github.com/douglasbrandao21
LinkedIn: https://www.linkedin.com/in/douglas-brandao/
*/

import React, { Component } from 'react'
import './Login.css'
import twitterLogo from '../twitter.svg'


export default class Login extends Component {

  state = {
    username: '',
  };

  handleSubmit = e => {
    e.preventDefault()

    const { username } = this.state

    if(!username.length) return
    
    localStorage.setItem('@GoTwitter:username', username)

    this.props.history.push('/timeline')
  }

  handleInputChange = e => {
    this.setState( {username: e.target.value} )
  }

  render() {
    return (
        <div className="login-wrapper">
          <img src={twitterLogo} alt="GoTwitter"></img>

          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder="Nome de usuário"
            />

            <button type="submit">Entrar</button>
          </form>

        </div>
    )
  }
}
