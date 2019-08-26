import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import './SearchBar.scss';

const { array, func, string } = PropTypes;

class SearchBar extends Component {
  render() {
    const { data, update, criteria } = this.props;

    const handleChange = event => {
      const value = event.target.value.toLowerCase();
      const filteredData = data.filter(items =>
        items[criteria].toLowerCase().includes(value.trim()),
      );

      update({ movies: filteredData });
    };

    return (
      <div className="search-bar">
        <input type="text" placeholder={`Search movie by ${criteria}...`} onChange={handleChange} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  data: array,
  update: func,
  criteria: string,
};

export default SearchBar;
