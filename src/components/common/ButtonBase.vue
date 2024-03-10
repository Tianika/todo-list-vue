<template>
  <button class="button-base"><slot></slot></button>
</template>

<style>
.button-base {
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  color: var(--color-background);
  background-color: var(--color-green);
  cursor: pointer;
}
</style>
