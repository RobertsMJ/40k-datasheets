<script setup lang="ts">
import type { IDatasheetWeapon } from '@/types/datasheets'
import DatasheetCreateWeaponsTableInput from './DatasheetCreateWeaponsTableInput.vue'

const props = defineProps<{
  modelValue: IDatasheetWeapon[]
  name: string
  skill: string
}>()
const emit = defineEmits(['update:modelValue'])

const updateWeaponAtIndex = (
  updatedWeapon: IDatasheetWeapon,
  index: number
) => {
  emit(
    'update:modelValue',
    props.modelValue.map((mv, i) => (i === index ? updatedWeapon : mv))
  )
}
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

const addWeaponAtIndex = (idx: number) => {
  emit('update:modelValue', [
    ...props.modelValue.slice(0, idx),
    getInitialWeapon(),
    ...props.modelValue.slice(idx)
  ])
}
const deleteWeaponAtIndex = (idx: number) => {
  emit(
    'update:modelValue',
    props.modelValue.filter((_, i) => i !== idx)
  )
}
</script>
<template>
  <table>
    <tr class="weapon-table__header-row">
      <th>{{ name }}</th>
      <th>Range</th>
      <th>A</th>
      <th>{{ skill }}</th>
      <th>S</th>
      <th>AP</th>
      <th>D</th>
      <th />
    </tr>
    <DatasheetCreateWeaponsTableInput
      v-for="(weapon, idx) in modelValue"
      :key="idx"
      :model-value="weapon"
      @update:model-value="
        (updatedWeapon) => updateWeaponAtIndex(updatedWeapon, idx)
      "
      @add-weapon="() => addWeaponAtIndex(idx + 1)"
      @delete-weapon="() => deleteWeaponAtIndex(idx)"
    />
  </table>
</template>
