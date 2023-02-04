<script>
import { useFetch } from "../composition-api";
export default {
  setup() {
    const { isLoaded, images, errorMessage } = useFetch(
      "https://vue-lessons-api.vercel.app/photo/list/12312"
    );
    return { isLoaded, images, errorMessage };
  },
};
</script>

<template>
  <div>
    <img v-if="!isLoaded" class="loading" src="../assets/load.gif" alt="" />

    <h1 v-if="errorMessage">ERROR: {{ errorMessage }}</h1>

    <div v-if="isLoaded" class="imgBlock">
      <img
        v-for="image in images.data"
        :key="image.url"
        :src="image.url"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>
