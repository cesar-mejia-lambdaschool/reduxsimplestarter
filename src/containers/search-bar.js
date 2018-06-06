import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions'

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
    this.props.fetchWeather(this.state.term)
    this.setState({
      term: ''
    })
  }

  render () {
    return (
      <div className='search-bar'>
        <form className='input-group' onSubmit={this.onFormSubmit}>
          <input
            className='form-control'
            placeholder='city, country'
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

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
