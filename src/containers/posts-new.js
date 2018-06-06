import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '../actions'

class PostsNew extends Component {
  renderField (field) {
    const { touched, error } = field.meta
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}:</label>
        <input className='form-control' type='text' {...field.input} />
        <div className='text-help'>{touched ? error : ''}</div>
      </div>
    )
  }

  onSubmit = (values) => {
    this.props.createPost(values, () => this.props.history.push('/'))
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field name='title' label='Title' component={this.renderField} />
          <Field
            name='categories'
            label='Categories'
            component={this.renderField}
          />
          <Field
            name='content'
            label='Post Content'
            component={this.renderField}
          />
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
          <Link className='btn btn-danger m-l-1' to='/'>
            Cancel
          </Link>
        </form>
      </div>
    )
  }
}

function validate (values) {
  const error = {}
  const { title, categories, content } = values
  if (!title || title.length < 3) {
    error.title = 'Enter a title that is at least 3 characters long!'
  }
  if (!categories) {
    error.categories = 'Enter some categories!'
  }
  if (!content) {
    error.content = 'Enter some content please!'
  }
  return error
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(connect(null, { createPost })(PostsNew))
