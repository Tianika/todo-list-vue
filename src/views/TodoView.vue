<script setup>
import { onBeforeMount } from 'vue'
import store from '@/store'
import { GET_TODOS } from '@/store/action-types'

import TodoList from '@/components/todo/TodoList.vue'

const getTodos = () => {
  store.dispatch(GET_TODOS)
}

onBeforeMount(() => {
  getTodos()
})
</script>

<template>
  <main>
    <div class="todo-list">
      <h1>Список дел</h1>
      <TodoList />
    </div>
  </main>
</template>

<style lang="scss">
.todo-list {
  max-width: 1280px;
}

@media (min-width: 1024px) {
}
</style>
