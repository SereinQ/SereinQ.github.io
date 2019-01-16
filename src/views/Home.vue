<template>
  <div class="home">
    <page msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import page from "@/components/page.vue";

export default {
  name: "home",
  components: {
    page
  }
};
</script>
