<script>
import { ref, onMounted } from "vue";

export default {
 setup() {
   // 透過ref 取得 dom 實體 命名與 ref相同
   const aaa = ref(null)
   
   onMounted( () => {
     aaa.value.focus();
   })

   return { aaa }
 }
}
</script>

<template>
  <input type="text" ref="aaa" id="aaaid">  
</template>

<style>

</style>