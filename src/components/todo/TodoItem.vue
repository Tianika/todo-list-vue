<script setup>
import { ref } from 'vue'

import store from '@/store'
import { CHANGE_TODOS, REMOVE_TODOS } from '@/store/action-types'

import IconEdit from '../icons/IconEdit.vue'
import IconRemove from '../icons/IconRemove.vue'
import IconSave from '../icons/IconSave.vue'
import InputText from '../common/InputText.vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const isEdit = ref(false)
const innerName = ref(props.name)
const completed = ref(props.completed)

const completedTodo = () => {
  completed.value = !completed.value
  saveTodo()
}

const changeTodo = () => {
  isEdit.value = false
  saveTodo()
}

const saveTodo = () => {
  const todo = {
    id: props.id,
    name: innerName.value,
    completed: completed.value
  }

  store.dispatch(CHANGE_TODOS, todo)
}

const editTodo = () => {
  isEdit.value = true
  innerName.value = props.name
}

const removeTodo = () => {
  store.dispatch(REMOVE_TODOS, props.id)
}
</script>

<template>
  <div class="todo-item">
    <input
      class="todo-item__checkbox"
      type="checkbox"
      :checked="props.completed"
      @click="completedTodo"
    />
    <template v-if="!isEdit">
      <span class="todo-item__name" :class="{ completed: props.completed }">{{ props.name }}</span>
      <IconEdit @click="editTodo" />
    </template>

    <template v-else>
      <InputText class="todo-item__name" v-model="innerName" />
      <IconSave @click="changeTodo" />
    </template>

    <IconRemove @click="removeTodo" />
  </div>
</template>

<style lang="scss">
.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;

  svg {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    padding: 5px;
    border: 1px solid var(--color-border);
    border-radius: 5px;
    cursor: pointer;
  }

  &__checkbox {
    cursor: pointer;
  }

  &__name {
    margin-right: auto;

    &.completed {
      text-decoration: line-through;
      opacity: 0.7;
    }
  }
}
</style>
