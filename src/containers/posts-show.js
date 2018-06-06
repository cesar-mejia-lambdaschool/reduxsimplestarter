import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost, deletePost } from '../actions'
class PostsShow extends Component {
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => this.props.history.push('/'))
  }

  render () {
    const { post } = this.props
    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link to='/'>Back to Index</Link>
        <button
          className='btn btn-danger pull-xs-right'
          onClick={() => this.onDeleteClick()}
        >
          Delete
        </button>
        <div>{post.title}</div>
        <div>{post.categories}</div>
        <div>{post.content}</div>
      </div>
    )
  }
}

function mapStateToProps ({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)
