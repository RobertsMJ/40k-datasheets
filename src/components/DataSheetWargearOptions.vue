<script setup lang="ts">
import type { IDatasheetWargearOption } from '@/types/datasheets'

defineProps<{ wargearOpts: IDatasheetWargearOption[] }>()
</script>
<template>
  <section>
    <h3>WARGEAR OPTIONS</h3>
    <ul v-for="(wargearOpt, idx) in wargearOpts" :key="idx">
      <li>{{ wargearOpt.text }}</li>
      <ul v-if="wargearOpt.options">
        <li v-for="(option, optIdx) in wargearOpt.options || []" :key="optIdx">
          {{ option }}
        </li>
      </ul>
    </ul>
  </section>
</template>
