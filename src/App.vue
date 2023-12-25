<script setup lang="ts">
onMounted(() => {
  console.log('app mounted')
})
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <HelloWorld msg="good job" />
  <InputBox @update:model-value="console.log" />
</template>
