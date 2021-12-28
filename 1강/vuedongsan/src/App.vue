<template>
  <Modal
    :oneroom_list="oneroom_list"
    :show_oneroom_id="show_oneroom_id"
    :modal_use="modal_use"
  ></Modal>
  <div class="menu">
    <a v-for="test in menu_list" :key="test">{{ test }}</a>
  </div>

  <Discount></Discount>

  <h1>{{ logo }}</h1>

  <Card 
    :oneroom_list="oneroom_list"
    :show_id="item.id"
    v-for="(item) in oneroom_list" :key="item">
    </Card>

  <div v-for="(item, i) in oneroom_list" :key="item">
    <img class="room-img" :src="item.image" />
    <h4
      @click="
        modal_use = true;
        show_oneroom_id = i;
      "
    >
      {{ item.title }}
    </h4>
  </div>
</template>

<script>
import oneroom from "./assets/data.js";

import Discount from "./Discount.vue";
import Modal from "./Modal.vue";
import Card from './Card.vue';

export default {
  name: "App",
  data() {
    return {
      logo: "원룸샵",
      // 신고수: 0,
      show_oneroom_id: 0,
      modal_use: false,
      modal_title: "Modal Title",
      modal_content: "Modal Content",
      menu_list: ["Home", "Shop", "About"],
      product_list: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      price_list: [10, 20, 30],
      oneroom_list: oneroom,
    };
  },
  methods: {
    increase(index) {
      this.report_list[index] += 1;
    },
  },
  components: {
    Discount: Discount,
    Modal: Modal,
    Card,
  },
};
</script> 




<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
