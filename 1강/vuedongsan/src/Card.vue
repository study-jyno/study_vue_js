<template>
  <div >
    <img class="room-img" :src="oneroom_list[show_id].image" />
    <!-- <h4
      @click="
        modal_use = true;
        show_oneroom_id = i;
      "
    > -->
    <h4>
      {{ oneroom_list[show_id].title }}
    </h4>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    oneroom_list: Object,
    show_id: Number,
  },
};
</script>

<style>
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>