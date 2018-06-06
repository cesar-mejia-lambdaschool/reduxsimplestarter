import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    const { posts } = this.props

    return _.map(posts, (post) => {
      return (
        <li className='list-group-item' key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      )
    })
  }

  render () {
    return (
      <div>
        <h3>Posts</h3>
        <ul className='list-group'>{this.renderPosts()}</ul>
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return { posts }
}
// # sexy way to avoid mapDispatchToProps call
export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
