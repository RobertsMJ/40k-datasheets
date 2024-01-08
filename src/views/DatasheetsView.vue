<script setup lang="ts">
import DataSheet from '@/components/DataSheet.vue'
import { useFetch } from '@/composables/useFetch'
import { useCursor } from '@/composables/useCursor'
import { useDataSheetsStore } from '@/store/datasheets'
import type { IDatasheet } from '@/types/datasheets'

const store = useDataSheetsStore()
await store.getDataSheets()

const { data, error } = useFetch<IDatasheet[]>('space_marines.json')

const { x, y } = useCursor()
</script>

<template>
  <main>
    {{ x }}, {{ y }}
    <div v-if="error">{{ error }}</div>
    <DataSheet
      v-else
      v-for="sheet in data"
      :data="sheet"
      :key="sheet.name"
    ></DataSheet>
  </main>
</template>
