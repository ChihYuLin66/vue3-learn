<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    // 土砲 a link active
    const allRoutes = ["", "about", "courses"];
    const route = useRoute();
    const activeKey = ref(0);

    watch(
      () => route.path,
      () => {
        allRoutes.forEach((routeNmae, routeIndex) => {
          let activeName = route.path.substr(1).split("/")[0];
          if (activeName === routeNmae) {
            activeKey.value = routeIndex;
          }
        });
      }
    );
    return {
      activeKey,
    };
  },
};
</script>

<template>
  <div id="nav">
    <router-link :class="{ active: activeKey === 0 }" to="/">
      Home
    </router-link>
    |
    <router-link :class="{ active: activeKey === 1 }" to="/about">
      About
    </router-link>
    |
    <router-link :class="{ active: activeKey === 2 }" to="/courses">
      Courses
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.active {
      color: #42b983;
    }
  }

  // .router-link-active {
  //   color: red;
  // }
}
</style>
