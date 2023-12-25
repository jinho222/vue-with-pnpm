<script setup lang="ts">
let name = $ref("");

const emits = defineEmits<{
  "update:modelValue": [val: string];
}>();
</script>

<template>
  <h2>input box</h2>
  <input type="text" v-model="name" @input="(e) => emits('update:modelValue', (e.target as any).value)" />
</template>
