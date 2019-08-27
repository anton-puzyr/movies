import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

import CustomInputField from '../../shared/CustomInputField';
import './SearchBar.scss';

const { array, func, string } = PropTypes;

class SearchBar extends Component {
  render() {
    const { data, update, criteria } = this.props;

    const handleChange = event => {
      const value = event.target.value.toLowerCase();
      const filteredData = data.filter(items => {
        if (Array.isArray(items[criteria])) {
          return items[criteria].find(e => e.toLowerCase().includes(value.trim()));
        }

        return items[criteria].toLowerCase().includes(value.trim());
      });

      update({ movies: filteredData });
    };

    return (
      <div className="search-bar">
        <div className="search-bar__input-group">
          <label className="search-bar__input-group__label">Search by {criteria}</label>
          <CustomInputField
            type="text"
            placeholder={`Search movie by ${criteria}...`}
            onChange={handleChange}
          />
        </div>
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
