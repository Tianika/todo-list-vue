import { SET_USER, SET_TODOS } from './mutation-types'

export default {
  [SET_USER](state, payload) {
    state.user = payload
  },
  [SET_TODOS](state, payload) {
    state.todos = payload
  }
}
