import React from 'react';
import { Form, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
class PostNew extends React.Component {
  render() {
    const {
      fields: { title, categories, content },
      handleSubmit,
    } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create post</h3>
        <div className='form-group'>
          <label>Title</label>
          <input type='text' className='form-control' {...title}></input>
        </div>
        <div className='form-group'>
          <label>Categories</label>
          <input type='text' className='form-control' {...categories}></input>
        </div>
        <div className='form-group'>
          <label>Content</label>
          <textarea className='form-control' {...content}></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </Form>
    );
  }
}
export default reduxForm(
  {
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
  },
  null,
  { createPost }
)(PostNew);
