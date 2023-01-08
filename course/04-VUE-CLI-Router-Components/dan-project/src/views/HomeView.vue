<script>
import Article from "@/components/Article.vue";
import Aside from "@/components/Aside.vue";
import Main from "@/components/Main.vue";

export default {
  name: 'HomeView',
  components: {
    Article,
    Aside,
    Main,
  }
}
</script>

<template>
  <div class="home">  
    <Article />
    <Aside />
    <Main />
  </div>
</template>
