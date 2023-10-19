import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import './tweet.scss'
import { handleErrors, safeCredentials } from '../../utils/fetchHelper';

function Tweet (props) {
  const {username, tweet, deleteTweet} = props;

  return (
    <div className='tweet-box py-2 px-3'>
      <div className='row'>
        <div className='col-6'>
          <Link to={`/feed/${tweet.username}/user`}><b>{tweet.username}</b></Link>
          <Link to={`/feed/${tweet.username}/user`}><span className='ps-1'>@{tweet.username}</span></Link>
        </div>
        {username === tweet.username 
          ? <div className='col-6 text-end'>
              <button 
                className='btn'
                onClick={() => deleteTweet(tweet)}
              >
                &times;
              </button>
            </div>
          : null
        }
        <div className='col-12'>
          {tweet.image && <div><img src={tweet.image}/></div>}
          {tweet.message}
        </div>
      </div>
    </div>
  )
}

export default Tweet;