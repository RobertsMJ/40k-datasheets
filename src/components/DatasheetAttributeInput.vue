<script setup lang="ts">
defineProps<{
  label: string
  modelValue: string
}>()
defineEmits(['update:modelValue'])
</script>
<template>
  <fieldset class="attribute">
    <label class="attribute__label">{{ label }}</label>
    <input
      class="attribute__input"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </fieldset>
</template>
<style scoped lang="scss">
.attribute {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  padding: 0;
  margin: 0.25rem;
}
.attribute__label {
}
.attribute__input {
  max-width: 2rem;
}
</style>
