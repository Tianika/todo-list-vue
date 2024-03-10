<script setup>
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'

import { REMOVE_USER, SAVE_USER } from '@/store/action-types'

import ButtonBase from '../common/ButtonBase.vue'
import InputText from '../common/InputText.vue'

const store = useStore()

const user = computed(() => store.state.user)
const newUser = ref('')

const setUser = () => {
  store.dispatch(SAVE_USER, newUser.value)
}

const removeUser = () => {
  newUser.value = ''
  store.dispatch(REMOVE_USER)
}

onMounted(() => {
  if (user.value) {
    newUser.value = user.value
  }
})
</script>

<template>
  <div class="hello-user">
    <template v-if="user">
      <h1>Приветствую, {{ user }}</h1>
      <ButtonBase @click="removeUser">Удалить пользователя </ButtonBase>
      <div class="hello-user__link">
        <RouterLink to="/todos">Перейти к списку дел</RouterLink>
      </div>
    </template>
    <template v-else>
      <h3>Напишите имя</h3>
      <InputText class="hello-user__new-name" v-model="newUser" />
      <ButtonBase @click="setUser">Применить </ButtonBase>
    </template>
  </div>
</template>

<style lang="scss">
.hello-user {
  h1,
  h3 {
    color: var(--color-green);
  }

  &__new-name {
    margin-right: 10px;
    padding: 5px;
  }

  &__link {
    margin-top: 30px;
  }
}
</style>
