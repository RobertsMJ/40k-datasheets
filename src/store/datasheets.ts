import type { IDatasheet } from '@/types/datasheets'
import { defineStore } from 'pinia'

export const useDataSheetsStore = defineStore('datasheets', {
  state: () => ({ data: [] as IDatasheet[] }),
  getters: {
    dataSheets: (state) => state.data
  },
  actions: {
    async getDataSheets() {
      try {
        const data = await fetch('space_marines.json')
        this.data = await data.json()
      } catch (ex) {
        console.error(ex)
      }
    }
  }
})
