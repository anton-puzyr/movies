import React from 'react';
import * as PropTypes from 'prop-types';

import './CustomInputField.scss';

const { string, object } = PropTypes;

const CustomInputField = props => {
  const { meta: { touched, error } = {}, placeholder, name, type, input } = props;

  return (
    <div className="input-wrapper">
      <input
        className="custom-input"
        name={name}
        type={type}
        placeholder={placeholder}
        {...input}
      />
      {touched && error && <div className="error">{error}</div>}
    </div>
  );
};

CustomInputField.propTypes = {
  placeholder: string,
  name: string,
  type: string,
  input: object,
  meta: object,
};

export default CustomInputField;
