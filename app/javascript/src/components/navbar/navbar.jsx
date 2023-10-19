import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import './navbar.scss'

function Navbar (props) {
  const { username, logOut } = props;
  const [language, setLanguage] = useState('English');

  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container-fluid'>
        <a 
          className='navbar-brand mb-auto ms-5'
          href='/feed'
        >
          <FontAwesomeIcon 
            className='brand' 
            icon={ faTwitter } 
          />
        </a>
        <ul className='navbar-nav me-0 mb-2 mb-lg-0'>
          {!username && 
            <li className='nav-item dropdown'>
              <a className='nav-link btn-outline-secondary dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                language: {language}
              </a>
              <ul className='dropdown-menu dropdown-menu-left'
                aria-labelledby='navbarDropdown'>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'
                    onClick={() => { setLanguage('Bahasa Malaya') }}
                  >
                    Bahasa Malaya
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'
                    onClick={() => { setLanguage('Dansk') }}
                  >
                    Dansk
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'
                    onClick={() => { setLanguage('English') }}
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'
                    onClick={() => { setLanguage('Suomi') }}
                  >
                    Suomi
                  </a>
                </li>
              </ul>
            </li>
          }
          { username &&
            <li className='nav-item dropdown'>
              <a className='nav-link btn-outline-secondary dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {username}
              </a>
              <ul className='dropdown-menu dropdown-menu-left'
                aria-labelledby='navbarDropdown'>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'
                  >
                    Profile
                  </a>
                </li>
                <div className="dropdown-divider"></div>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'
                  >
                    Lists
                  </a>
                </li>
                <div className="dropdown-divider"></div>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'
                  >
                    Keyboard shortcuts
                  </a>
                </li>
                <div className="dropdown-divider"></div>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    className='dropdown-item'
                    href='#'
                    onClick={() => logOut()}
                  >
                    Log out
                  </a>
                </li>
              </ul>
            </li>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;