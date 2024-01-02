<script setup lang="ts">
import DataSheet from '@/components/DataSheet.vue'
import { useDataSheetsStore } from '@/store/datasheets'

const store = useDataSheetsStore()
await store.getDataSheets()
</script>

<template>
  <main>
    <DataSheet
      v-for="data in store.data"
      :data="data"
      :key="data.name"
    ></DataSheet>
  </main>
</template>
