<script>
import { ref } from "vue";
import TitleBar from "@/components/TitleBar.vue";
import CourseList from "@/components/CourseList.vue";
export default {
  components: {
    TitleBar,
    CourseList,
  },
  setup() {
    const isOpen = ref(true);
    const toggleList = () => {
      isOpen.value = !isOpen.value;
    }

    return { isOpen,toggleList };
  }
}
</script>

<template>
 <TitleBar :toggleList="toggleList" />
 <CourseList :isOpen="isOpen" />
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
