<template>
  <div v-for="(blogData) in listData" :key="blogData">
    <h5>{{blogData.title}}</h5>
    <p>{{blogData.content}}</p>
    <p>{{blogData.date}}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    listData: Object,
  },
};
</script>

<style>
</style>