import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { footerData } from '../../data/footer';
import './Footer.scss';

const { func, string } = PropTypes;

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__list">
        {footerData.map((item, key) => {
          return (
            <li key={key} className="footer__list__item">
              <Link to={item.link}>{item.value}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Footer.propTypes = {
  Footer: func,
  className: string,
};

export default Footer;
