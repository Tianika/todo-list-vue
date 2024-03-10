<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import TodoItem from './TodoItem.vue'
import NewTodo from './NewTodo.vue'

const store = useStore()

const todos = computed(() => store.state.todos)
</script>

<template>
  <div>
    <template v-if="!todos.length">
      <div>Здесь пока ничего нет</div>
    </template>

    <TodoItem
      v-for="{ id, name, completed } in todos"
      :id="id"
      :name="name"
      :completed="completed"
      :key="id"
    />
    <NewTodo />
  </div>
</template>
