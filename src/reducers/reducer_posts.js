import _ from 'lodash'
import { POSTS_FETCH, POST_FETCH, POST_DELETE, POST_CREATE } from '../actions'

export function PostsReducer (state = {}, action) {
  switch (action.type) {
    case POSTS_FETCH:
      return _.mapKeys(action.payload.data, 'id')
    case POST_FETCH:
      const post = action.payload.data
      return { ...state, [post.id]: post }
    case POST_DELETE:
      return _.omit(state, action.payload)
    case POST_CREATE:
      return { ...state, [action.payload.data.id]: action.payload.data }
    default:
      return state
  }
}
