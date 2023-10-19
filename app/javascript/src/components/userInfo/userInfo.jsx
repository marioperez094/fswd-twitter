import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom';

import './userInfo.scss';

function UserInfo (props) {
  const {username, userTweets} = props;
  return (
    <div className='user-tag p-3'>
      <Link to={`/feed/${username}/user`}><h5>{username}</h5></Link>
      <Link to={`/feed/${username}/user`}><p><small>@{username}</small></p></Link>
      <div className='row'>
        <div className='col-4'>
          <Link to={`/feed/${username}/user`}><p className='user-card-labels'>Tweets</p></Link>
          <Link to={`/feed/${username}/user`}><p className='user-count'>{userTweets.length}</p></Link>
        </div>
        <div className='col-4'>
          <Link to={`/feed/${username}/user`}><p className='user-card-labels'>Following</p></Link>
          <Link to={`/feed/${username}/user`}><p className='user-count'>0</p></Link>
        </div>
        <div className='col-4'>
          <Link to={`/feed/${username}/user`}><p className='user-card-labels'>Followers</p></Link>
          <Link to={`/feed/${username}/user`}><p className='user-count'>0</p></Link>
        </div>
      </div>
    </div>
  )
}

export default UserInfo