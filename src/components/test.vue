<template>
  <div>
    <button type="button" @click="handleClick">加1</button>  
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'

@Component
export default class Test extends Vue {
  @Emit('customClick')
  handleClick() {
    return 1;
  }
}
</script>  