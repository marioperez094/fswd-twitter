import React, { useState } from 'react';
import ReactDOM from 'react-dom';


import Postbox from '../postbox/postbox';
import Tweet from '../tweet/tweet';

import './home.scss';
import UserInfo from '../userInfo/userInfo';

function Home (props) {
  const {username, post, image, allTweets, userTweets, postTweet, handlePostChange, handleFileChange, deleteTweet} = props;
  
  return (
    <div className='container-fluid home'>
      <div className='row mt-3'>
        <div className='col-4'>
          <UserInfo username={username} userTweets={userTweets} />
        </div>
        <div className='col-8'>
          <Postbox
            post={post}
            image={image}
            postTweet={postTweet}
            handlePostChange={handlePostChange}
            handleFileChange={handleFileChange}
          />
          <div className='mt-2'>
            {allTweets.length > 0
              ? allTweets.map((tweet) => {
                return <Tweet username={username} tweet={tweet} deleteTweet={deleteTweet} key={tweet.id} />
              })
              : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;