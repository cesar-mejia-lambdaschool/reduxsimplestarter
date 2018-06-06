import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    const { posts } = this.props.posts

    return _.map(posts, (post) => {
      return (
        <li className='list-group-item' key={post.id}>
          {post.title}
        </li>
      )
    })
  }

  render () {
    const { posts } = this.props.posts
    console.log('POSTS', posts)
    return (
      <div>
        <h3>Posts</h3>
        <ul className='list-group'>{this.renderPosts()}</ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { posts: state.posts }
}
// # sexy way to avoid mapDispatchToProps call
export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
