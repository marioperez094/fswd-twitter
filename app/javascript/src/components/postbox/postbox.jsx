import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { handleErrors, safeCredentials } from '../../utils/fetchHelper';

import './postbox.scss'

function Postbox (props) {
  const {post, image, postTweet, handlePostChange, handleFileChange} = props;

  return (
    <form onSubmit={(e) => postTweet(e)} className='post-box text-end'>
      <textarea
        spellCheck='true'
        value={post}
        onChange={(event) => handlePostChange(event)}
      >
      </textarea>
      <label>Upload image</label>
      <input 
        type='file' 
        id='image-select' 
        name='image' 
        accept='image/*' 
        onChange={(event) => handleFileChange(event)} 
      />
      <button
        className='btn btn-primary'
        type='submit'
      >
        Tweet
      </button>
    </form>
  )
}

export default Postbox;