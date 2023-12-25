<script setup lang="ts">
const { msg } = defineProps<{
  msg: string;
}>();

let count = $ref(0);
let message = $ref(msg)

function increment() {
  count++;
  message = 'reactivity'
}
</script>

<template>
  <h1>{{ message }}</h1>

  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
  </div>
</template>
