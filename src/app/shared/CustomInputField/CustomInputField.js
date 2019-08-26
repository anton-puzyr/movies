import React from 'react';
import * as PropTypes from 'prop-types';

import './CustomInputField.scss';

const { string, object, func } = PropTypes;

const CustomInputField = props => {
  const { meta: { touched, error } = {}, placeholder, name, type, input, onChange } = props;

  return (
    <div className="input-wrapper">
      <input
        className="custom-input"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
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
  onChange: func,
};

export default CustomInputField;
