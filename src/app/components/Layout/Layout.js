import React from 'react';
import * as PropTypes from 'prop-types';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import './Layout.scss';

const { object } = PropTypes;

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Header />
        <div className="layout__children">{children}</div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: object,
};

export default Layout;
