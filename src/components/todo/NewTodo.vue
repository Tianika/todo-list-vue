<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

import { SAVE_TODOS } from '@/store/action-types'
import InputText from '../common/InputText.vue'
import ButtonBase from '../common/ButtonBase.vue'

const store = useStore()
const newTodoName = ref('')

const addTodo = () => {
  if (!newTodoName.value) return

  const newTodo = {
    id: Date.now(),
    name: newTodoName.value,
    completed: false
  }
  newTodoName.value = ''

  store.dispatch(SAVE_TODOS, newTodo)
}
</script>

<template>
  <div class="new-todo">
    <InputText class="new-todo__input" v-model="newTodoName" />
    <ButtonBase @click="addTodo">Добавить в список </ButtonBase>
  </div>
</template>

<style lang="scss">
.new-todo {
  &__input {
    margin-right: 15px;
    padding: 5px;
  }
}
</style>
