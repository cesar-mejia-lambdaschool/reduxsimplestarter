import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBgxQy0aDqd4m3s4zsXkO-I3Mlv_se0DFk'
// Create a new component. This component should produce
// some HTML
YTSearch({ key: API_KEY, term: 'surfboards' }, (data) => console.log(data))

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'))
