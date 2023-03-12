import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { headerLinksL } from '../../constants/data';
import './Header.css';

const Header = () => {
  return (
    <div id="page" className="site">
      <header>
        <div className="header-top">
          <div className="wrapper flexitem">
            <div className="left">
              <ul className="flexitem main-links">
                {headerLinksL.map((link, i) => (
                  <li key={i}>
                    <a href={link.id}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="right">
              <ul className="flexitem">
                <li className="second-links">
                  <a href="#">Sign up</a>
                  <a href="#">My account</a>
                  <a href="#">Order Tracking</a>
                  <a href="#">USD <span className="icon-small">{<FiChevronDown />}</span></a>
                  <a href="#">English <span className="icon-small"><FiChevronDown /></span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;