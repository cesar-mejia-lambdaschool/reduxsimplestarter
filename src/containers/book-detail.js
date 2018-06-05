import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render () {
    const { book } = this.props
    if (!book) {
      return <div>Please select an item.</div>
    }

    return (
      <div>
        <h3>Book Details</h3>
        <p>Title: {book.title}</p>
        <p>Pages: {book.pages}</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    book: state.activeBook
  }
}
export default connect(mapStateToProps)(BookDetail)
