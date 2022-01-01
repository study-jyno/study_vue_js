<template>
  <div>
    <h5>{{ listData[paramsShowDetailListID].title }}</h5>
    <p>{{ listData[paramsShowDetailListID].content }}</p>
    <p>{{ listData[paramsShowDetailListID].date }}</p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      paramsShowDetailListID : this.$route.params.id,
    };
  },
  props: {
    listData: Array,
    showDetailListID: Number,
  },
};
</script>

<style>
</style>