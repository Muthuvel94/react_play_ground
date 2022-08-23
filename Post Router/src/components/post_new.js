import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';

class PostNew extends React.Component {
  renderTitleField(field) {
    return (
      <div className='form-group'>
        <label>Title</label>
        <input className='form-control' type='text' {...field.input} />
      </div>
    );
  }
  render() {
    return (
      <Form>
        <Field name='title' component={this.renderTitleField} />
        <Field name='tags' component={this.renderTagsField} />
      </Form>
    );
  }
}
export default reduxForm({ form: 'PostsNewForm' })(PostNew);
