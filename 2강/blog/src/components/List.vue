<template>
  <div>
    <h5>{{blogData.title}}</h5>
    <p>{{blogData.content}}</p>
    <p>{{blogData.date}}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    blogData: Object,
    show_id: Number,
  },
};
</script>

<style>
</style>