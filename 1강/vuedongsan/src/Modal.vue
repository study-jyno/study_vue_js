<template>
  <div class="black-dg" v-if="modal_use">
    <div class="white-dg">
      <h4>{{ oneroom_list[show_oneroom_id].title }}</h4>
      <img class="room-img" :src="oneroom_list[show_oneroom_id].image" />
      <p>{{ oneroom_list[show_oneroom_id].content }}</p>
      <!-- <input @input="month = $event.target.value" /> -->
      <input v-model.number="month" />
      <p>
        {{ month }} 개월 선택함 :
        {{ month * oneroom_list[show_oneroom_id].price }} 원
      </p>
      <button @click="$emit('closeModal')">닫기</button>
      <!-- props는 read-only임 받아온거 수정하면 큰일남 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      month: 1,
    };
  },

  watch: {
    // 함수명을 감시 할 데이터 명으로 작성하면 됨
    month(a, b) {
      // a == month 데이터임 b== 변경 전 데이터
      // 사용자가 month를 글자로 입력하면 경고문 띄워주셈
      // 사용자가 month에 입력한 데이터가 13보다 크면 경구몬 띄우기
      if (a >= 13) {
        alert("13 이상 입력하지 마셈");
        this.month = 1;
      }
      if (typeof a == "string"){
        alert("문자 입력 하지 마셈");
        this.month = b;
      }
    },
  },
  props: {
    oneroom_list: Object,
    show_oneroom_id: Number,
    modal_use: Boolean,
  },
};
</script>

<style>
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
</style>