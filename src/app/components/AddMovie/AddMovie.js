import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import CustomInputField from '../../shared/CustomInputField';
import CustomTextareaField from '../../shared/CustomTextareaField';
import Button from '../../shared/Button';
import {
  required,
  number,
  minValue5,
  maxValue4,
} from '../../shared/validators/formFieldsValidation';
import './AddMovie.scss';

const { func } = PropTypes;

class AddMovie extends Component {
  render() {
    const { handleSubmit } = this.props;

    const submit = form => {
      console.log(form);
    };

    return (
      <div className="add-movie">
        <form onSubmit={handleSubmit(submit)}>
          <div className="input-group">
            <label className="input-group__label" htmlFor="title">
              Title
            </label>
            <Field
              component={CustomInputField}
              type="text"
              name="title"
              placeholder="Enter title"
              validate={[required, minValue5]}
            />
          </div>
          <div className="input-group">
            <label className="input-group__label" htmlFor="title">
              Release Year
            </label>
            <Field
              component={CustomInputField}
              type="text"
              name="year"
              placeholder="Enter release year"
              validate={[required, number, maxValue4]}
            />
          </div>
          <div className="input-group">
            <label className="input-group__label" htmlFor="title">
              Format
            </label>
            <Field
              component={CustomInputField}
              type="text"
              name="format"
              placeholder="Enter format"
              validate={required}
            />
          </div>
          <div className="input-group">
            <label className="input-group__label" htmlFor="stars">
              Stars
            </label>
            <Field
              component={CustomTextareaField}
              type="text"
              name="stars"
              placeholder="Enter stars"
            />
          </div>
          <Button text="Add movie" type="submit" />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  dispatch: func,
  handleSubmit: func,
};

export default reduxForm({
  form: 'add-movie',
})(AddMovie);
