<script setup lang="ts">
defineProps({
  msg: String,
})

let count = $ref(0)

function increment() {
  count++
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
  </div>
</template>
