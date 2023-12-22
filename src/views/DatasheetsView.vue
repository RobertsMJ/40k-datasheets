<script setup lang="ts">
import type { IDatasheet } from '@/types/datasheets'
import DataSheet from '@/components/DataSheet.vue'

const data = await fetch('space_marines.json')
const datasheets: IDatasheet[] = await data.json()
</script>

<template>
  <main>
    <DataSheet v-for="data in datasheets" :data="data" :key="data.name"></Datasheet>
  </main>
</template>
