<script>
import { ref } from "vue";
export default {
  setup() {
    const show = ref(false);
    
    return { show };
  }
}
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <Transition name="fade">
    <div v-if="show" id="box">hello</div>
  </Transition>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: slategray;
}

#box {
  width: 100px;
  height: 100px;
  background-color:red;
}

// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s ease;
// }

.fade-enter-active {
  animation: bounce-in 0.5s;

}
.fade-leave-active {
  animation: bounce-in 0.5s reverse;
}



// .fade-enter-to,
// .fade-leave-from {
//   opacity: 1;
// }

// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
// }

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
