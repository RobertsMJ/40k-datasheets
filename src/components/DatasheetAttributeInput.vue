<script setup lang="ts">
defineProps<{
  label: string
  modelValue: string
  decorator?: string
}>()
defineEmits(['update:modelValue'])
</script>
<template>
  <fieldset class="attribute">
    <label>{{ label }}</label>
    <span>
      <input
        class="input attribute__input"
        type="text"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement)?.value)
        "
      /><span class="attribute__decorator" v-if="decorator">{{
        decorator
      }}</span>
    </span>
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
.attribute__input {
  max-width: 2.25rem;
}
.attribute__decorator {
  margin-left: 0.2rem;
}
</style>
