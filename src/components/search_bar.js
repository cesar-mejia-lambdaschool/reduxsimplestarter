import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }
    console.log('in constructor')
  }

  componentWillMount () {
    console.log('in componentWillMount')
  }

  componentDidMount () {
    console.log('in componentDidMount')
  }

  render () {
    console.log('in render')
    return (
      <input
        name='search'
        type='text'
        placeholder='Search'
        onChange={this.onInputChange}
        value={this.state.term}
      />
    )
  }

  onInputChange = ({ target }) => {
    this.setState({
      term: target.value
    })
  }
}

export default SearchBar
