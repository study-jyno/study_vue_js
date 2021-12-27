<template>
  <div class="black-dg" v-if="modal_use">
    <div class="white-dg">
      <h4>{{ modal_title }}</h4>
      <p>{{ modal_content }}</p>
      <button @click='modal_use=false'>닫기</button>
    </div>
  </div>
  <div class="menu">
    <a v-for="test in menu_list" :key="test">{{ test }}</a>
  </div>
  <h1>{{ logo }}</h1>

  <!-- <div v-for="(v, i) in products" :key=v> -->
  <div v-for="i in product_list.length" :key="i">
    <img class="room-img" @click='modal_use=true' :src="require(`${image_list[i - 1]}`)" />
    <h4>{{ product_list[i - 1] }}</h4>
    <p>{{ price_list[i - 1] }} 만원</p>
    <button @click="increase(i - 1)">허위 매물 신고</button>
    <span>신고수 : {{ report_list[i - 1] }}</span>
  </div>
  <!-- <div>
    <h4>{{ product_list[0] }}</h4>
    <p>50만원</p>
    <button @click="increase()">허위 매물 신고</button
    ><span>신고수 : {{ 신고수 }}</span>
    <button @mouseover="increase()">허위 매물 신고</button
    ><span>신고수 : {{ 신고수 }}</span> -->
  <!-- <button v-on:click="신고수++">허위 매물 신고</button><span>신고수 : {{신고수}}</span> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      logo: "원룸샵",
      // 신고수: 0,
      modal_use: false,
      modal_title: "Modal Title",
      modal_content: "Modal Content",
      report_list: [0, 0, 0],
      price1: 60,
      price2: 70,
      color: "color :blue",
      image_list: [
        "./assets/room0.jpg",
        "./assets/room1.jpg",
        "./assets/room2.jpg",
      ],
      menu_list: ["Home", "Shop", "About"],
      product_list: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      price_list: [10, 20, 30],
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
