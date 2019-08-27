import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../shared/Button';
import { importFile } from '../../store/actions';
import './ImportMovies.scss';

const { func } = PropTypes;

class ImportMovies extends Component {
  state = {
    selectedFile: null,
  };

  render() {
    const { dispatch } = this.props;

    const handleChange = event => {
      this.setState({ selectedFile: event.target.files[0] });
    };

    const sendFile = () => {
      const data = new FormData();
      data.append('file', this.state.selectedFile);

      dispatch(importFile(data));
    };

    return (
      <div className="import-movies">
        <input type="file" accept="text/plain" onChange={handleChange} />
        <Button
          text="Upload"
          type="submit"
          onClick={sendFile}
          disabled={!this.state.selectedFile}
        />
      </div>
    );
  }
}

ImportMovies.propTypes = {
  dispatch: func,
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapDispatchToProps)(ImportMovies);
