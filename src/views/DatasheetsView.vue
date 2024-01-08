<script setup lang="ts">
import DataSheet from '@/components/DataSheet.vue'
import { useFetch } from '@/composables/useFetch'
import { useCursor } from '@/composables/useCursor'
import type { IDatasheet } from '@/types/datasheets'
import { ref } from 'vue'

const { x, y } = useCursor()

const faction = ref('space_marines')
const { data, error } = useFetch<IDatasheet[]>(() => `${faction.value}.json`)
</script>

<template>
  <main>
    {{ x }}, {{ y }}
    <select name="faction" v-model="faction">
      <option value="space_marines">Space Marines</option>
      <option value="adeptus_mechanicus">Adeptus Mechanicus</option>
      <option value="tyranids">Tyranids</option>
    </select>
    <div v-if="error">Select a faction! {{ error }}</div>
    <DataSheet
      v-else
      v-for="sheet in data"
      :data="sheet"
      :key="sheet.name"
    ></DataSheet>
  </main>
</template>
