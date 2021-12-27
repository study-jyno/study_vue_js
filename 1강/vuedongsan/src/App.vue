<template>
  <div class="menu">
    <a v-for="test in menu_list" :key="test">{{ test }}</a>
  </div>
  <h1>{{ logo }}</h1>

  <!-- <div v-for="(v, i) in products" :key=v> -->
  <div v-for="i in product_list.length" :key=i>
    <h4>{{ product_list[i - 1] }}</h4>
    <p>{{ price_list[i - 1]  }} 만원</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      logo: "원룸샵",
      price1: 60,
      price2: 70,
      color: "color :blue",
      menu_list: ["Home", "Shop", "About"],
      product_list: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      price_list: [10, 20, 30],
    };
  },
  components: {},
};
</script> 




<style>
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
</style>
