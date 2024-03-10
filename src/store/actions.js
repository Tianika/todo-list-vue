import { localStorageKeys } from '@/enum'

import { SET_USER, SET_TODOS } from './mutation-types'
import {
  GET_USER,
  SAVE_USER,
  GET_TODOS,
  SAVE_TODOS,
  REMOVE_USER,
  CHANGE_TODOS,
  REMOVE_TODOS
} from './action-types'

export default {
  [GET_USER]({ commit }) {
    const user = localStorage.getItem(localStorageKeys.user)

    if (user) {
      commit(SET_USER, user)
    }
  },
  [SAVE_USER]({ commit }, user) {
    localStorage.setItem(localStorageKeys.user, user)

    commit(SET_USER, user)
  },
  [REMOVE_USER]({ commit }) {
    localStorage.removeItem(localStorageKeys.user)

    commit(SET_USER, '')
  },
  [GET_TODOS]({ commit }) {
    const todos = localStorage.getItem(localStorageKeys.todos)

    if (todos) {
      commit(SET_TODOS, JSON.parse(todos))
    }
  },
  [SAVE_TODOS]({ commit, state }, todo) {
    const { todos } = state
    const newList = [...todos, todo]

    localStorage.setItem(localStorageKeys.todos, JSON.stringify(newList))

    commit(SET_TODOS, newList)
  },
  [CHANGE_TODOS]({ commit, state }, newTodo) {
    const { id } = newTodo
    const { todos } = state
    const newList = todos.map((todo) => ({
      ...(todo.id === id ? newTodo : todo)
    }))

    localStorage.setItem(localStorageKeys.todos, JSON.stringify(newList))

    commit(SET_TODOS, newList)
  },
  [REMOVE_TODOS]({ commit, state }, id) {
    const { todos } = state
    const newList = todos.filter((todo) => todo.id !== id)

    localStorage.setItem(localStorageKeys.todos, JSON.stringify(newList))

    commit(SET_TODOS, newList)
  }
}
