/*
Author: Douglas Brandão dos Santos
Brazil, 10 January 2019
GitHub: https://github.com/douglasbrandao21
LinkedIn: https://www.linkedin.com/in/douglas-brandao/
*/

import React, { Component } from 'react'
import '../pages/Timeline.css'
import TwitterLogo from '../twitter.svg'
import api from '../services/api'
import Tweet from '../components/Tweet'
import socket from 'socket.io-client'

export default class Timeline extends Component {

  state = {
    tweets: [],
    newTweet: ''
  }

  async componentDidMount() {
    this.subscribeToEvent()
    const response = await api.get('tweets')
    this.setState({tweets: response.data})
  }

  handleInputChange = e => {
    this.setState( {newTweet: e.target.value} )
  }

  handleNewTweet = async e => {
    if(e.keyCode != 13)
      return
    
    const content = this.state.newTweet
    const author = localStorage.getItem('@GoTwitter:username')

    await api.post('tweets', {content, author})

    this.setState({newTweet: ''})

    console.log(content, author)
  }

  subscribeToEvent = () => {
    const io = socket('http://localhost:3000')

    io.on('tweet',data => {
      this.setState( {tweets: [data, ...this.state.tweets]} )
    })

    io.on('like', data => {
      this.setState( {tweets: this.state.tweets.map(tweet => 
        tweet._id == data._id ? data : tweet
      )} )
    })
  }

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={TwitterLogo} alt="GoTwitter"></img>
      
        <form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?"
          />
        </form>

        <ul className="tweet-list">
          { this.state.tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet} ></Tweet>
          ))}
        </ul>
        

      </div>
    )
  }
}
