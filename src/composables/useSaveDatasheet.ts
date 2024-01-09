import type { IDatasheet } from '@/types/datasheets'
import { watchEffect, type MaybeRefOrGetter, toValue } from 'vue'

export function useSaveDatasheet(datasheet: MaybeRefOrGetter<IDatasheet>) {
  function saveDatasheet() {
    watchEffect(() => {
      console.log('saving', toValue(datasheet))
    })
  }

  return { saveDatasheet }
}
