import _ from 'lodash'
import { POSTS_FETCH } from '../actions'

export function PostsReducer (state = {}, action) {
  console.log('In Post-Reducer')
  switch (action.type) {
    case POSTS_FETCH:
      console.log('REDUCER REPORTING: Received action: ', action)
      return {
        posts: _.mapKeys(action.payload.data, 'id')
      }
    default:
      return state
  }
}
