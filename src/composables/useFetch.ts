import { ref, toValue, watchEffect, type Ref, type MaybeRefOrGetter } from 'vue'

export function useFetch<Type>(url: MaybeRefOrGetter<string>): {
  data: Ref<Type | null>
  error: Ref<string | null>
} {
  const data: Ref<Type | null> = ref(null)
  const error: Ref<string | null> = ref(null)

  watchEffect(async () => {
    data.value = null
    error.value = null

    try {
      const res = await fetch(toValue(url))
      data.value = await res.json()
      console.log('I got the data')
    } catch (ex) {
      if (ex instanceof Error) error.value = ex.message
      else error.value = String(ex)
    }
  })

  return { data, error }
}
