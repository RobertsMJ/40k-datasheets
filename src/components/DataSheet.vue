<script setup lang="ts">
import type { IDatasheet } from '@/types/datasheets'
import DataSheetHeader from '@/components/DataSheetHeader.vue'

defineProps<{
  data: IDatasheet
}>()
</script>
<template>
  <section class="datasheet">
    <DataSheetHeader :name="data.name" :attributes="data.attributes" />
    <!-- <div>{{ data.name }}</div>
    <div>{{ data.keywords }}</div> -->
  </section>
</template>
<style scoped lang="scss">
.datasheet {
  border: 1px solid black;
}
</style>
