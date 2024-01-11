import type { IDatasheet } from '@/types/datasheets'
import { defineStore } from 'pinia'
import { ref, type MaybeRefOrGetter, computed, toValue, type Ref } from 'vue'

export const useDatasheetsStore = defineStore('datasheets', () => {
  const data = ref<IDatasheet[]>([])
  const datasheets = computed((): Ref<IDatasheet[]> => data)

  async function getDatasheets(faction: MaybeRefOrGetter<string>) {
    data.value = []
    try {
      const res = await fetch(`${toValue(faction)}.json`)
      data.value = await res.json()
    } catch (ex) {
      if (ex instanceof Error) throw ex
      else throw new Error(String(ex))
    }
  }

  function addDatasheet(datasheet: IDatasheet) {
    data.value.push(datasheet)
  }

  return { datasheets, getDatasheets, addDatasheet }
})
