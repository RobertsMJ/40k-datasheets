<template>
  <span class="green">{{ id }}</span>
</template>
<script setup lang="ts">
// TODO: Add ability description
// TODO: Add tooltip on mouseover to show description
defineProps<{ id: string }>()
</script>
