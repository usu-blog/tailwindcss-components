<template>
  <button
    class="whitespace-nowrap inline-flex items-center justify-center px-4 py-1 rounded-md shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50 transition"
    :class="[colorClass, sizeClass, isFull]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
type Props = {
  size?: string
  color?: string
  type?: string
  full?: boolean
  disabled?: boolean
}

export default Vue.extend<{}, {}, {}, Props>({
  props: {
    size: {
      type: String,
      default: undefined,
    },
    color: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: 'fill',
    },
    full: {
      type: Boolean,
      default: false,
    },
    // disabled
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    colorClass() {
      let colorName: string
      if (this.color === 'primary') colorName = 'blue'
      else if (this.color === 'success') colorName = 'green'
      else if (this.color === 'warning') colorName = 'yellow'
      else if (this.color === 'danger') colorName = 'red'
      else colorName = 'gray'

      switch (this.type) {
        case 'fill':
          return `bg-${colorName}-500 hover:bg-${colorName}-600 text-white border border-transparent focus:ring-${colorName}-500`
        case 'outlined':
          return `border-solid border-2 border-${colorName}-500 text-${colorName}-500 hover:bg-${colorName}-600 hover:bg-opacity-10 focus:ring-${colorName}-500`
        case 'text':
          return `text-${colorName}-500 hover:bg-${colorName}-600 hover:bg-opacity-10 focus:ring-${colorName}-500`
      }
    },
    sizeClass() {
      switch (this.size) {
        case 'small':
          return 'text-sm py-1 px-3'
        case 'large':
          return 'text-lg py-2 px-6'
        default:
          return 'text-base py-2 px-4'
      }
    },
    isFull() {
      switch (this.full) {
        case true:
          return 'w-full'
        case false:
          return undefined
        default:
          return undefined
      }
    },
  },
})
</script>
