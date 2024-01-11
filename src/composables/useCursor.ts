import { onMounted, onUnmounted, ref, type Ref } from 'vue'

type NullableNumber = Ref<number | null>
export function useCursor(): { x: NullableNumber; y: NullableNumber } {
  const x: NullableNumber = ref(null)
  const y: NullableNumber = ref(null)

  function updateCursor(event: MouseEvent) {
    x.value = event.clientX
    y.value = event.clientY
  }

  onMounted(() => window.addEventListener('mousemove', updateCursor))
  onUnmounted(() => window.removeEventListener('mousemove', updateCursor))

  return { x, y }
}
