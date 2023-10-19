import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


import Postbox from '../postbox/postbox';
import Tweet from '../tweet/tweet';

import './profile.scss';
import UserInfo from '../userInfo/userInfo';

import { handleErrors, safeCredentials } from '../../utils/fetchHelper';

function Profile(props) {
  const { username, post, userTweets, postTweet, handlePostChange, deleteTweet } = props;
  const [profileTweets, setProfileTweets] = useState('');
  let user = useParams();

  function profileLoader(profile) {
    fetch(`/api/users/${profile}/tweets`)
      .then(handleErrors)
      .then(res => {
        console.log(res)
        setProfileTweets(res.tweets);
      })
  }

  useEffect(() => {
    profileLoader(user[0])
  }, [])



  return (
    <div className='container-fluid home'>
      <div className='row mt-3'>
        <div className='col-4'>
          <UserInfo username={user[0]} userTweets={profileTweets} />
        </div>
        <div className='col-8'>
          <Postbox
            post={post}
            postTweet={postTweet}
            handlePostChange={handlePostChange}
          />
          <div className='mt-2'>
            {profileTweets.length > 0
              ? profileTweets.map((tweet) => {
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

export default Profile;