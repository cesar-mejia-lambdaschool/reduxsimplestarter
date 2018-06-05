import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onInputChange = (e) => {
    const { value } = e.target
    this.setState({
      term: value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
  }

  render () {
    return (
      <div className='search-bar'>
        <form className='input-group' onSubmit={this.onFormSubmit}>
          <input
            className='form-control'
            placeholder='Get a five-day forecast in your favorite cities'
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className='input-group-btn'>
            <button type='submit' className='btn btn-secondary'>
              Submit
            </button>
          </span>
        </form>
      </div>
    )
  }
}

export default SearchBar
