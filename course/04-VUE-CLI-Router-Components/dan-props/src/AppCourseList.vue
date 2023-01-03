<script>
import { ref } from "vue";
import TitleBar from "@/components/TitleBar.vue";
import CourseList from "@/components/CourseList.vue";
import TimerBox from "@/components/TimerBox.vue";
export default {
  components: {
    TitleBar,
    CourseList,
    TimerBox,
  },
  setup() {
    const isOpen = ref(true);
    const toggleList = () => {
      isOpen.value = !isOpen.value;
    }

    const handleTimeBoxTimeOut = (num) => {
      console.log('TimerBox Component is timeout.', num.value)
    }

    return { isOpen, toggleList, handleTimeBoxTimeOut };
  }
}
</script>

<template>
 <TitleBar :toggleList="toggleList" />
 <CourseList :isOpen="isOpen" />
 <TimerBox @TimeOut="handleTimeBoxTimeOut"/>
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
#app {
  width: 400px;
  overflow: hidden;
  border: 1px solid #42b983;
  border-radius: 10px;
}
</style>
