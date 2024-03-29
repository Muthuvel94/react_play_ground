import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends React.Component {
  renderField(field) {
    const {
      meta: { touched, error },
    } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className='form-control' type='text' {...field.input} />
        <div className='text-help'>{touched ? error : ''}</div>
      </div>
    );
  }
  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
      alert('Post Submitted');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label='Title' name='title' component={this.renderField} />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field label='Content' name='content' component={this.renderField} />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>

        <Link to='/' className='btn btn-danger'>
          Cancel
        </Link>
      </Form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter the Title';
  }
  if (!values.categories) {
    errors.categories = ' Enter some categories ';
  }
  if (!values.content) {
    errors.content = ' Enter some content';
  }
  return errors;
}
export default reduxForm({ validate, form: 'PostsNewForm' })(
  connect(null, { createPost })(PostNew)
);
