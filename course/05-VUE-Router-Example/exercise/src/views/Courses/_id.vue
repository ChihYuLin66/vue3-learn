<script>
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const course = reactive({ data: {} });
    const isError = ref(false);

    onMounted(() => {
      axios
        .get(`https://vue-lessons-api.vercel.app/courses/${route.params.id}`)
        .then((response) => {
          course.data = response.data.data.pop();
        })
        .catch((error) => {
          isError.value = true;
          course.data["errorMessage"] = error.response.data.error_message;

          setTimeout(() => {
            // 導向特定頁
            // router.push({ path: "/Courses" });
            // router.push({ name: "Courses" });

            // 回上一頁
            router.go(-1);
          }, 1000);
        });
    });
    return {
      course,
      isError,
    };
  },
};
</script>
<template>
  <div>
    <div v-if="!isError">
      <h1>{{ course.data.name }}</h1>
      <h2>NTD: {{ course.data.money }}</h2>
      <img :src="course.data.photo" alt="" />
      <div v-if="Object.keys(course.data).length !== 0">
        <img :src="course.data.teacher.img" alt="" />
        <p>{{ course.data.teacher.name }}</p>
      </div>
    </div>
    <!-- error_message -->
    <h1 v-if="isError">{{ course.data.errorMessage }}</h1>
  </div>
</template>

<style></style>
