<script setup lang="ts">
import type { IWeapon } from '@/types/datasheets'

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
      <td class="weapon-table__data">{{ weapon.name }}</td>
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
  background-color: darkblue;
}
.weapon-table__table-row {
  &:nth-child(odd) {
    background-color: rgba(#000, 0.25);
  }
  &:hover {
    background-color: rgba(#000, 0.5);
  }
}
.weapon-table__data {
  margin: 0 1em;
}
.weapon-table__data--centered {
  text-align: center;
}
</style>
