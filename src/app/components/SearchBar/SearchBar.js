import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import './SearchBar.scss';

const { array, func } = PropTypes;

class SearchBar extends Component {
  render() {
    const { data, update } = this.props;

    const handleChange = event => {
      const value = event.target.value.toLowerCase();
      const filteredData = data.filter(items => items.title.toLowerCase().includes(value.trim()));

      update({ movies: filteredData });
    };

    return (
      <div className="search-bar">
        <input type="text" placeholder="Search movie by title..." onChange={handleChange} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  data: array,
  update: func,
};

export default SearchBar;
