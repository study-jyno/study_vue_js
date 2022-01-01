<template>
  <div v-for="(blogData, i) in listData" :key="blogData">
    <h5 @click="$router.push({name:'detail', params : {id : i} })"> {{ blogData.title }}</h5>
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