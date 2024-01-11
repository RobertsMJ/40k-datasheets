<script setup lang="ts">
import DataSheet from '@/components/DataSheet.vue'
import { useCursor } from '@/composables/useCursor'
import { ref, watchEffect } from 'vue'
import { useDatasheetsStore } from '@/store/datasheets'

const { x, y } = useCursor()

const faction = ref('space_marines')

const store = useDatasheetsStore()
const error = ref<Error | null>(null)

watchEffect(async () => {
  error.value = null
  try {
    await store.getDatasheets(faction)
  } catch (ex) {
    if (ex instanceof Error) error.value = ex
    else error.value = new Error(String(ex))
  }
})
</script>

<template>
  <main>
    {{ x }}, {{ y }}
    <select name="faction" v-model="faction">
      <option value="space_marines">Space Marines</option>
      <option value="adeptus_mechanicus">Adeptus Mechanicus</option>
      <option value="tyranids">Tyranids</option>
    </select>
    <section>
      <div v-if="error">Select a faction! {{ error.message }}</div>
      <DataSheet
        v-else
        v-for="sheet in store.datasheets"
        :data="sheet"
        :key="sheet.name"
      ></DataSheet>
    </section>
  </main>
</template>
