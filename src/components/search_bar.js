import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }
  }

  render () {
    return (
      <div className='search-bar'>
        <input
          name='search'
          type='text'
          placeholder='Search'
          onChange={this.onInputChange}
          value={this.state.term}
        />
      </div>
    )
  }

  onInputChange = ({ target }) => {
    const term = target.value
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar
