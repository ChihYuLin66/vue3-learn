<script>
import PropsTest from "@/components/PropsTest.vue";
import { reactive, ref } from 'vue';
export default {
  components:{
    PropsTest
  },
  setup() {
    // const data = ref('hello dan');
    const str = ref('hello dan');
    const bool = ref(true);
    const num = ref(0);
    const arr = reactive([]);
    const obj = reactive({});
    const foo = () => {}
    return { 
      str,
      bool,
      num,
      arr,
      obj,
      foo,
    };
  }
}
</script>

<template>
  <PropsTest 
    :str="str"
    :bool="bool"
    :num="num"
    :arr="arr"
    :obj="obj"
    :foo="foo"
  />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
