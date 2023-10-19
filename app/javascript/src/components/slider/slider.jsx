import React, { useState, useEffect } from 'react';
import ReactDOM from 'react';

import './slider.scss';


function Slider (props) {
  const {backgroundCount} = props;

  return (
    <div className={`image${backgroundCount}`} id='slider'>
    </div>
  )
}

export default Slider;