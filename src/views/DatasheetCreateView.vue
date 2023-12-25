<script setup lang="ts">
import type { IDatasheet } from '@/types/datasheets'
import { reactive } from 'vue'
import DatasheetAttributeInput from '../components/DatasheetAttributeInput.vue'

const getInitialFormState = () => ({
  name: '',
  attributes: {
    movement: '',
    toughness: '',
    save: '',
    wounds: '',
    leadership: '',
    objective_control: ''
  }
})

const form = reactive(getInitialFormState())

const onSave = () => console.log(form)
const onClear = () => {
  Object.assign(form, getInitialFormState())
}
</script>
<template>
  <form>
    <label for="name" class="form__label">Name</label>
    <input type="text" name="name" v-model="form.name" />

    <fieldset class="form__attributes-fieldset">
      <DatasheetAttributeInput label="M" v-model="form.attributes.movement" />
      <DatasheetAttributeInput label="T" v-model="form.attributes.toughness" />
    </fieldset>

    <button type="button" @click="onSave">save</button>
    <button type="reset" @click="onClear">reset</button>
  </form>
</template>
<style scoped lang="scss">
.form__attributes-fieldset {
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
}
.form__label {
  display: flex;
}
</style>
