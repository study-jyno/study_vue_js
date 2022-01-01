<template>
  <div v-for="(blogData, i) in listData" :key="blogData">
    <h5>{{ blogData.title }}</h5>
    <button>
      <router-link @click="changeShowDetail(i)" to="/detail">상세 페이지</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    listData: Object,
  },
  methods:{
    changeShowDetail(showBlogId){
      this.$emit('changeShowDetail', showBlogId);
    },
  }
};
</script>

<style>
</style>