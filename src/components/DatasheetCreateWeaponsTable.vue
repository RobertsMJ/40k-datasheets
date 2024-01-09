<script setup lang="ts">
import { Weapon, type IWeapon } from '@/types/datasheets'
import DatasheetCreateWeaponsTableRow from './DatasheetCreateWeaponsTableRow.vue'

const props = defineProps<{
  modelValue: IWeapon[]
  name: string
  skill: string
}>()
const emit = defineEmits<{ 'update:modelValue': [weapons: IWeapon[]] }>()

const updateWeaponAtIndex = (updatedWeapon: IWeapon, index: number) => {
  emit(
    'update:modelValue',
    props.modelValue.map((weapon, i) => (i === index ? updatedWeapon : weapon))
  )
}

const addWeaponAtIndex = (idx: number) => {
  emit('update:modelValue', [
    ...props.modelValue.slice(0, idx),
    new Weapon(),
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
    <DatasheetCreateWeaponsTableRow
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
