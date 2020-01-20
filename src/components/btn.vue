<template>
  <div>
      <input type="checkbox" :checked="checked"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model} from 'vue-property-decorator';

@Component
export default class  Btn extends Vue {
    @Model ('change', {type: Boolean})  checked!: boolean;
}
</script>