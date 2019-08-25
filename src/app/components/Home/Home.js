import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import './Home.scss';

const { array } = PropTypes;

class Home extends Component {
  render() {
    return (
      <div className="home">
        {this.props.movies.map(value => {
          return <div key={value.id}>{value.name}</div>;
        })}
      </div>
    );
  }
}

Home.propTypes = {
  movies: array,
};

export default Home;
