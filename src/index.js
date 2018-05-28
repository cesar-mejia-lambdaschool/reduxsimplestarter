import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyBgxQy0aDqd4m3s4zsXkO-I3Mlv_se0DFk'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('marvel')
  }

  videoSearch = (term) => {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    const videoSearch = _.debounce((term) => this.videoSearch(term), 300)
    return (
      <div>
        <div className='nav'>
          <i className='fab fa-youtube fa-3x' />
          <div className='nav-heading'>CesarTube</div>
          <SearchBar onSearchTermChange={videoSearch} />
        </div>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
