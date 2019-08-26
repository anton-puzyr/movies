import React from 'react';
import * as PropTypes from 'prop-types';

import './Button.scss';

const { string, bool, func } = PropTypes;

const Button = ({ text, type, disabled, onClick }) => {
  return (
    <button className="button" type={type} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: string,
  type: string,
  disabled: bool,
  onClick: func,
};

export default Button;
