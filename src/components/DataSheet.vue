<script setup lang="ts">
import type { IDatasheet } from '@/types/datasheets'
import DataSheetHeader from '@/components/DataSheetHeader.vue'
import DataSheetWeaponTable from './DataSheetWeaponTable.vue'
import DataSheetWargearOptions from './DataSheetWargearOptions.vue'

defineProps<{
  data: IDatasheet
}>()
</script>
<template>
  <section class="datasheet">
    <DataSheetHeader :name="data.name" :attributes="data.attributes" />
    <!-- <div>{{ data.name }}</div>
    <div>{{ data.keywords }}</div> -->
    <DataSheetWeaponTable
      :weapons="data.ranged_weapons"
      name="Ranged Weapons"
      skill="BS"
      class="datasheet__table"
    />
    <DataSheetWeaponTable
      :weapons="data.melee_weapons"
      name="Melee Weapons"
      skill="WS"
      class="datasheet__table"
    />
    <DataSheetWargearOptions :wargear-opts="data.wargear_options" />
  </section>
</template>
<style scoped lang="scss">
.datasheet {
  border: 1px solid black;
}
.datasheet__table {
  width: 100%;
}
</style>
