<script>
import { onUnmounted, ref } from "vue";
export default {
  setup() {
    const time = ref(5);

    setInterval(() => {
      time.value--;
      if (time.value <= 0) {
        console.log("clearInterval");
      }
    }, 1000);

    // 更換頁面的時候要移除計時器
    onUnmounted(() => {
      clearInterval(timer);
    })

    return { time };
  },
};
</script>
<template>
  <div class="home">
    <img src="../assets/logo.png" alt="" />
    <h1>{{ time }}</h1>
  </div>
</template>
