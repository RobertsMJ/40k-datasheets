<script setup lang="ts">
defineProps<{
  attribute: string
  abbrev: string
}>()
</script>
<template>
  <div class="attr-container">
    <p>{{ abbrev }}</p>
    <p class="attr-value">{{ attribute }}</p>
  </div>
</template>
<style scoped lang="scss">
.attr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
}

$border-radius: 20%;
.attr-value {
  padding: 8px;
  border: 3px solid red;
  border-top-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;
}
</style>
