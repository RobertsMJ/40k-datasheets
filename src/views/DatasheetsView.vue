<script setup lang="ts">
import type { IDatasheet } from '@/types/datasheets'
import DataSheet from '@/components/DataSheet.vue'
import { reactive } from 'vue'

const data = await fetch('space_marines.json')
const datasheets: IDatasheet[] = await data.json()

let form = reactive({ name: '' })
const onClick = () => {
  console.log(form)
}
</script>

<template>
  <main>
    <form>
      <input type="text" v-model="form.name" />
      <p>name is: {{ form.name }}</p>
      <button type="button" @click="onClick">click me</button>
    </form>

    <DataSheet
      v-for="data in datasheets"
      :data="data"
      :key="data.name"
    ></DataSheet>
  </main>
</template>
