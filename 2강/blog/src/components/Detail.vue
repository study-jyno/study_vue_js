<template>
  <div>
    <h5>{{listData[showDetailListID].title}}</h5>
    <p>{{listData[showDetailListID].content}}</p>
    <p>{{listData[showDetailListID].date}}</p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    listData: Object,
    showDetailListID:Number,
  },
};
</script>

<style>
</style>