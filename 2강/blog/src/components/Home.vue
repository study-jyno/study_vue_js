<template>
  <div class="row">
    <div class="col-4">
      <img
        src="../assets/profile.jpeg"
        class="img-fluid"
        alt="../assets/profile.jpeg"
      />
    </div>
    <div class="col-8">
      <div class="card">
        <div class="card" style="width: 18rem"></div>
        <div class="card-body">
          <h5 class="card-title">
            안녕하세요. Vue.js를 공부하고 있는 devjyno96 입니다.
          </h5>
          <p class="fs-4">
            코딩애플님의 강의를 들으면서 진행하니 혼자 하는것 보다 훨신 빠르고
            쉽네요.
          </p>
          <p class="fs-5">좋은 강의 열어주셔서 감사합니다.</p>
          <p class="fs-5">
            내일 까지 다 듣고 주말에 하고싶은 페이지 만들어 보자구요.
          </p>

          <a href="https://github.com/devjyno96" class="card-link">github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>