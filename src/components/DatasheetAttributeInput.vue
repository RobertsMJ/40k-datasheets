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
    <span class="input attribute-input">
      <input
        class="attribute-input__input"
        type="text"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement)?.value)
        "
      />
      <span v-if="decorator" class="attribute-input__append">
        {{ decorator }}
      </span>
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
.attribute-input {
  border: 1px solid var(--color-border);
  display: inline-flex;
  align-items: baseline;
  background: var(--vt-c-white);
  // padding: 0;

  &:focus-within {
    box-shadow: 0 0 0.3rem 0.1rem rgba(red, 0.5);
  }
}
.attribute-input__input {
  border: none;
  background: none;
  text-align: center;

  margin: 0;
  padding: 0;
  width: 1rem;
  // height: 1.5rem;

  &:focus {
    outline: none;
  }
}
.attribute-input__prepend,
.attribute-input__append {
  display: flex;
  padding: 0;
  background: none;
  color: var(--vt-c-black);
  line-height: 1;
}
</style>
