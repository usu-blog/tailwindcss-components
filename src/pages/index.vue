<template>
  <div class="container p-2">
    <div class="flex justify-center">
      <h1 class="font-bold text-5xl text-green-300">Hello World</h1>
      <Button :disabled="true">テスト</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/button/Button.vue'
export default Vue.extend({
  components: { Button },
})
</script>
