import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { headerData } from '../../data/header';
import Logo from '../../../assets/icons/logo.svg';
import './Header.scss';

const { object } = PropTypes;

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <Link to="/">
            <div className="logo-wrapper">
              <Logo />
              <p className="logo-wrapper__title">Movies</p>
            </div>
          </Link>
          <div className="nav">
            <ul className="nav__list">
              {headerData.map((item, key) => {
                return (
                  <li key={key} className="nav__list__item">
                    <Link to={item.link}>{item.value}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {};

export default withRouter(Header);
