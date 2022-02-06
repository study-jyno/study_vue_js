<template>
  <div>
    <Post v-for="post in postData" :key="post" :post=post />
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  name: "Container",
  components: {
    Post,
  },
  props: {
    postData: Object,
  },
};
</script>

<style>
</style>
