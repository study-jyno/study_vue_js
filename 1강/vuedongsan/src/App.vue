<template>
  <div class="black-dg" v-if="modal_use">
    <div class="white-dg">
      <h4>{{ oneroom_list[show_oneroom_id].title }}</h4>
      <img class="room-img" :src="oneroom_list[show_oneroom_id].image" />
      <p>{{ oneroom_list[show_oneroom_id].content }}</p>
      <p>{{ oneroom_list[show_oneroom_id].price }} 원</p>
      <button @click="modal_use = false">닫기</button>
    </div>
  </div>
  <div class="menu">
    <a v-for="test in menu_list" :key="test">{{ test }}</a>
  </div>
  <h1>{{ logo }}</h1>
  <div v-for="(item, i) in oneroom_list" :key="item">
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
  components: {},
};
</script> 




<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-dg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-dg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
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
