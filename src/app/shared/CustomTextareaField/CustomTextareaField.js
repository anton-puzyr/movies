import React from 'react';
import * as PropTypes from 'prop-types';

import './CustomTextArea.scss';

const { string, object } = PropTypes;

const CustomTextareaField = props => {
  const { placeholder, name, input, meta: { touched, error } = {} } = props;

  return (
    <div className="textarea-wrapper">
      <textarea className="custom-textarea" name={name} placeholder={placeholder} {...input} />
      {touched && error && <div className="error">{error}</div>}
    </div>
  );
};

CustomTextareaField.propTypes = {
  placeholder: string,
  name: string,
  input: object,
  meta: object,
};

export default CustomTextareaField;
