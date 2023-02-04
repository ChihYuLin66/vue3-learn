<script>
import { ref } from "vue";
export default {
  setup() {
    const colorRed = ref('#FF0000');
    const name = ref("mike");
    return {
      colorRed,
      name,
    };
  },
};
</script>
<template>
  <h1 class="title">{{ name }}</h1>
</template>

<style lang="scss">
.title {
  font-size: 30px;
  color: v-bind(colorRed);
}
</style>
