<template>
  <div>
    <img class="room-img" :src="oneroom_list[show_id].image" />
    <h4 @click="call_emit()">
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
  methods: {
    call_emit() {
      this.$emit("openModal", this.show_id);
    },
  },
};
</script>

<style>
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>