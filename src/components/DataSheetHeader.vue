<script setup lang="ts">
import type { IUnitAttributes } from '@/types/datasheets'
import DataSheetAttribute from '@/components/DataSheetAttribute.vue'
const props = defineProps<{
  name: string
  attributes: IUnitAttributes
}>()

const attrs = [
  { value: props.attributes.movement, abbrev: 'M' },
  { value: props.attributes.toughness, abbrev: 'T' },
  { value: props.attributes.save, abbrev: 'SV' },
  { value: props.attributes.wounds, abbrev: 'W' },
  { value: props.attributes.leadership, abbrev: 'LD' },
  { value: props.attributes.objective_control, abbrev: 'OC' }
]
</script>
<template>
  <section class="header-row">
    <div class="name">{{ name }}</div>
    <div class="attribute-container">
      <DataSheetAttribute
        v-for="attr in attrs"
        :key="attr.abbrev"
        :attribute="attr.value"
        :abbrev="attr.abbrev"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
.header-row {
  display: flex;
  flex-direction: column;
}
.attribute-container {
  display: flex;
  flex-direction: row;
}
.name {
  padding: 8px;
}
</style>
