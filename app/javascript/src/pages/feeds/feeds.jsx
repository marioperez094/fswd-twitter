import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Navbar from '../../components/navbar/navbar'
import Home from '../../components/home/home'
import Profile from '../../components/Profile/profile';

import './feeds.scss'

import {handleErrors, safeCredentials, safeCredentialsFormData} from '../../utils/fetchHelper';

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      username: '',
      allTweets: '',
      userTweets: '',
      post: 'What is happening?',
      image: null,
    }
    this.tweetLoader = this.tweetLoader.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.postTweet = this.postTweet.bind(this);
    this.postPost = this.postPost.bind(this);
    this.deleteTweet = this.deleteTweet.bind(this);
  }

  componentDidMount() {
    fetch(`/api/authenticated`)
      .then(handleErrors)
      .then(res => {
        console.log(res)
        if (!res.authenticated) {
          return window.location.assign('/')
        }
        this.setState({username: res.username})
        this.tweetLoader()
      })
  }

  handlePostChange(event) {
    this.setState({post: event.target.value})
  }

  handleFileChange(event) {
    this.setState({image: event.target.files[0]}, () => {console.log(this.state.image)})
  }

  tweetLoader() {
    fetch(`/api/tweets`)
      .then(handleErrors)
      .then(res => {
        console.log(res)
        this.setState({allTweets: res.tweets})
      })

    fetch(`/api/users/${this.state.username}/tweets`)
      .then(handleErrors)
      .then(res => {
        console.log(res)
        this.setState({userTweets: res.tweets})
      })
  }

  postTweet(event) {
    const {post, image} = this.state;
    event.preventDefault();
    if (!post) {
      return;
    }

    if (!image) {
      return this.postPost();
    }


    let formData = new FormData();

    formData.set('tweet[image]', image);
    formData.set('tweet[message]', post)

    fetch(`/api/tweets`, safeCredentialsFormData({
      method: 'POST',
      body: formData
    }))
      .then(handleErrors)
      .then(res => {
        console.log(res)
        this.setState({post: 'What is happening?'})
        if (res) {
          this.tweetLoader()
        }
      })
  }

  postPost() {
    const {post} = this.state;

    fetch(`/api/tweets`, safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        'tweet': {
          'message': post
        }
      })
    }))
      .then(handleErrors)
      .then(res => {
        console.log(res)
        this.setState({ post: 'What is happening?' })
        if (res) {
          this.tweetLoader()
        }
      })
  }

  logOut() {
    fetch(`/api/sessions`, safeCredentials({
      method: 'DELETE'
    }))
      .then(handleErrors)
      .then(res => {
        if (res.success) {
          window.location.assign('/')
        }
      })
  }

  deleteTweet(tweet) {
    if (tweet.username !== this.state.username) {
      return;
    }

    fetch(`/api/tweets/${tweet.id}`, safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(res => {
        if (res.success) {
          this.tweetLoader()
        }
      })
  }

  render () {
    const {username, post, image, allTweets, userTweets} = this.state;
    return (
      <>
        <Navbar username={username} logOut={this.logOut} />
        <div id='feed-background'></div>
        <div className='feed-content'>
          <Router>
            <Switch>
              <Route exact path='/feed'>
                <Home 
                  username={username}
                  post={post}
                  image={image}
                  allTweets={allTweets}
                  userTweets={userTweets}
                  postTweet={this.postTweet}
                  deleteTweet={this.deleteTweet}
                  handlePostChange={this.handlePostChange}
                  handleFileChange={this.handleFileChange}

                />
              </Route>
              <Route path={`/feed/*/user`}>
                <Profile
                  username={username}
                  userTweets={userTweets}
                  post={post}
                  postTweet={this.postTweet}
                  deleteTweet={this.deleteTweet}
                  handlePostChange={this.handlePostChange}
                  handleFileChange={this.handleFileChange}
                />
              </Route>
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feeds />,
    document.body.appendChild(document.createElement('div')),
  )
})