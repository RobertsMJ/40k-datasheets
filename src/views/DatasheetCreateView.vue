<script setup lang="ts">
import { reactive } from 'vue'
import DatasheetAttributeInput from '../components/DatasheetAttributeInput.vue'
import DatasheetCreateWeaponsTable from '../components/DatasheetCreateWeaponsTable.vue'
import type { IDatasheetWeapon } from '@/types/datasheets'

const getInitialWeapon = (): IDatasheetWeapon => ({
  name: '',
  abilities: [],
  attributes: {
    range: '',
    attacks: '',
    skill: '',
    strength: '',
    armour_penetration: '',
    damage: ''
  }
})
const getInitialFormState = () => ({
  name: '',
  attributes: {
    movement: '',
    toughness: '',
    save: '',
    wounds: '',
    leadership: '',
    objective_control: ''
  },
  ranged_weapons: [getInitialWeapon()]
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
    <input class="input" type="text" name="name" v-model="form.name" />

    <fieldset class="form__attributes-fieldset">
      <DatasheetAttributeInput label="M" decorator='"' v-model="form.attributes.movement" />
      <DatasheetAttributeInput label="T" v-model="form.attributes.toughness" />
      <DatasheetAttributeInput label="SV" decorator="+" v-model="form.attributes.save" />
      <DatasheetAttributeInput label="W" v-model="form.attributes.wounds" />
      <DatasheetAttributeInput
        label="LD"
        decorator="+"
        v-model="form.attributes.leadership"
      />
      <DatasheetAttributeInput
        label="OC"
        v-model="form.attributes.objective_control"
      />
    </fieldset>
    <fieldset class="form__attributes-fieldset">
      <DatasheetCreateWeaponsTable
        v-model="form.ranged_weapons"
        name="Ranged Weapons"
        skill="BS"
      />
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
