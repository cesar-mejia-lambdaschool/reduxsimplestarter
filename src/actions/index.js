import axios from 'axios'
import config from '../config'
export const POSTS_FETCH = 'posts_fetch'
export const POST_CREATE = 'post_create'
export const POST_FETCH = 'post_fetch'
export const POST_DELETE = 'post_delete'

const ROOT_URL = 'https://reduxblog.herokuapp.com/api'
const { API_KEY } = config

export function fetchPosts () {
  const response = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  // console.log('ActionCreator - fetchPosts Launched: ', response)
  return {
    type: POSTS_FETCH,
    payload: response
  }
}

export function createPost (values, cb) {
  const response = axios
    .post(`${ROOT_URL}/posts/${API_KEY}`, values)
    .then(() => cb())
  // console.log('ActionCreator - createPosts Launched: ', response)

  return {
    type: POST_CREATE,
    payload: response
  }
}

export function fetchPost (id) {
  const response = axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`)
  return {
    type: POST_FETCH,
    payload: response
  }
}

export function deletePost (id, cb) {
  const response = axios
    .delete(`${ROOT_URL}/posts/${id}/${API_KEY}`)
    .then(() => cb())
  return {
    type: POST_DELETE,
    payload: id
  }
}
