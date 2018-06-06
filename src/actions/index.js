import axios from 'axios'
import config from '../config'
export const POSTS_FETCH = 'posts_fetch'

export function fetchPosts () {
  const { API_KEY } = config
  const ROOT_URL = 'https://reduxblog.herokuapp.com/api'
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  console.log('ActionCreatorLaunched: ', request)
  return {
    type: POSTS_FETCH,
    payload: request
  }
}
