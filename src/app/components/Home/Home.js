import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { importFile } from '../../store/actions';
import './Home.scss';

const { array, func } = PropTypes;

class Home extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div className="home">
        {this.props.movies.map(value => {
          return <div key={value._id}>{value.title}</div>;
        })}
        <input type="file" accept="text/plain" />
        <button type="submit" onClick={file => dispatch(importFile(file))}>
          upload
        </button>
      </div>
    );
  }
}

Home.propTypes = {
  movies: array,
  dispatch: func,
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapDispatchToProps)(Home);
