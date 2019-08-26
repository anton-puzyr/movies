import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { importFile } from '../../store/actions';
import './ImportMovies.scss';

const { func } = PropTypes;

class ImportMovies extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div className="import-movies">
        <input type="file" accept="text/plain" />
        <button type="submit" onClick={file => dispatch(importFile(file))}>
          upload
        </button>
      </div>
    );
  }
}

ImportMovies.propTypes = {
  dispatch: func,
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapDispatchToProps)(ImportMovies);
