<script setup lang="ts">
import type { IWeapon } from '@/types/datasheets'
import DatasheetAbility from './DatasheetAbility.vue'

defineProps<{ weapons: IWeapon[]; name: string; skill: string }>()
</script>
<template>
  <table class="weapon-table">
    <tr class="weapon-table__header-row">
      <th>{{ name }}</th>
      <th>Range</th>
      <th>A</th>
      <th>{{ skill }}</th>
      <th>S</th>
      <th>AP</th>
      <th>D</th>
    </tr>
    <tr
      v-for="weapon in weapons"
      :key="weapon.name"
      class="weapon-table__table-row"
    >
      <td class="weapon-table__data">
        <p>{{ weapon.name }}</p>
        <p class="weapon-table__abilities">
          <DatasheetAbility
            v-for="ability of weapon.abilities"
            :key="ability"
            :id="ability"
          />
        </p>
      </td>
      <td class="weapon-table__data weapon-table__data--centered">
        {{ weapon.attributes.range }}
      </td>
      <td class="weapon-table__data weapon-table__data--centered">
        {{ weapon.attributes.attacks }}
      </td>
      <td class="weapon-table__data weapon-table__data--centered">
        {{ weapon.attributes.skill }}
      </td>
      <td class="weapon-table__data weapon-table__data--centered">
        {{ weapon.attributes.strength }}
      </td>
      <td class="weapon-table__data weapon-table__data--centered">
        {{ weapon.attributes.armour_penetration }}
      </td>
      <td class="weapon-table__data weapon-table__data--centered">
        {{ weapon.attributes.damage }}
      </td>
    </tr>
  </table>
</template>
<style scoped lang="scss">
.weapon-table__header-row {
  background-color: var(--vt-c-ultramarines-blue);
  color: var(--vt-c-text-dark-1);
}
.weapon-table__table-row {
  &:nth-child(odd) {
    background-color: var(--vt-c-black-soft);
  }
  &:hover {
    background-color: var(--vt-c-black-mute);
  }
}
.weapon-table__data {
  margin: 0 1em;
}
.weapon-table__data--centered {
  text-align: center;
}
.weapon-table__abilities {
  margin-left: 1rem;
}
</style>
