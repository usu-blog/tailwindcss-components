<template>
  <label class="flex items-center space-x-3 select-none" for="check">
    <input
      id="check"
      type="checkbox"
      :class="`form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-${colorName}-600 checked:border-transparent focus:outline-none`"
    />
    <span class="text-gray-900 font-medium"><slot /></span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
type Props = {
  color?: string
}

export default Vue.extend<{}, {}, {}, Props>({
  props: {
    color: {
      type: String,
    },
  },
  computed: {
    colorName() {
      let colorName: string
      if (this.color === 'primary') colorName = 'blue'
      else if (this.color === 'success') colorName = 'green'
      else if (this.color === 'warning') colorName = 'yellow'
      else if (this.color === 'danger') colorName = 'red'
      else colorName = 'gray'
      return colorName
    },
  },
})
</script>

<style scoped>
.form-tick:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
}
</style>
