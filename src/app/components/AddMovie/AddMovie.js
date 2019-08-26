import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import CustomInputField from '../../shared/CustomInputField';
import CustomTextareaField from '../../shared/CustomTextareaField';
import Button from '../../shared/Button';
import { addMovie } from '../../store/actions';
import {
  required,
  number,
  minValue3,
  maxValue4,
} from '../../shared/validators/formFieldsValidation';
import './AddMovie.scss';

const { func } = PropTypes;

class AddMovie extends Component {
  render() {
    const { handleSubmit, dispatch } = this.props;

    const submit = form => {
      dispatch(
        addMovie({
          title: form.title,
          releaseYear: form.year,
          format: form.format,
          stars: form.stars,
        }),
      );
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
              validate={[required, minValue3]}
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

const mapDispatchToProps = dispatch => ({ dispatch });

export default compose(
  connect(mapDispatchToProps),
  reduxForm({ form: 'add-movie' }),
)(AddMovie);
