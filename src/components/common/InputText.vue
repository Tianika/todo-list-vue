<script setup>
defineProps({
  modelValue: {
    type: String
  }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    class="input-text"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style>
.input-text {
  border-radius: 5px;
}
</style>
