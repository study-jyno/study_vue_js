# 1. 환경 구설
## 1. 설치
1. Node.js 설치
뭐 설정하지 말고 그냥 진행
2. vscode 설치
나는 pycharm 쓰고 싶지만 하란대로 해보자
웹 버전 해보자 - terminal 사용이 불가능 해 로컬에서 진행
3. 개발환경 셋팅
npm install -g @vue/cli
vue 개발환경을 설치함
4. extension 설치
vutur, HTML CSS Support, Vue 3 Snnippets 설치
쌩 코딩 방지용

npm 잘 안되면 yarn 사용하면 됩니다 - 구글 검색 하세요
	yarm global add @vue/cli

설치 완료 하면 프로젝트 생성에 들어갑니다

## 2. 작업용 폴더 생성
생성된 폴더에 프로젝트 생성

vue create vuedongsan
vue3 선택하면 됨

vuedongsan 폴더 생성됨
폴더 안에 src/App.vue 가 매인 페이지 임

\<template\> 안에는 HTML 짜고
\<script\> 안에는 js 짜면 됩니다.
\<style\> 안에는 css 짜면 됩니다.

## 3. 짠 코드를 보고싶다?
npm run serve


node js 왜 설치함?

npm,쓰려고 각종 웹 개발 라이브러리 설치 도우미

npm으로 @vue/cli 설치함

vue 프로젝트 빠르게 생성해주는 라이브러리

프로젝트 생성은 vue create PROJECT_NAME


App.vue가 메인 페이지

web browser는 vue 파일을 못읽음
그럼 어떻게 읽음?
html에 vue를 박아넣음 - 아직은 몰라도 됨

node_modules : 프로젝트에 쓰는 라이브러리들
srs source code location
public html, 기타 파일 보관
package.json 라이브러리 버전, 프로젝트 설정 기록

# 2. Data Binding
temlate에 평소 css , html 하던대로 하다가 vue 문법이 필요하면 사용

데이터 바인딩? - Js데이터를 HTML에 꽂아넣는 문법

js document 가져오소 가져온 innerHTML에 넣는건 번거로움

vue는 값을 넣어두는 통이 있음
data(){
return{
price1:60
}
}
데이터는 object 자료형임 - JSON

생성한 Data를 어떻게 사용하나
template 내에서 {{ price1 }} 이렇게 해주면 됨

이 문법을 왜 쓰는가?
나중에 변경을 쉽게 할 수 있도록 하드코딩 하지 않는거임
실시간 렌더링 기능을 이용하려고 - 그냥 하드코딩 안하려고 하는거임 - data에 있는 값이 변동되면 실시간으로 감지해 새로 그려줌 - 일일이 redraw할 필요 없음

자주 변경될 일 없는 데이터들은 뭐 굳이 할 필요 없음

이런식도 가능
HTML 속성도 데이터 바인딩 가능
단 속성에 넣고 싶을때는 : 으로 지정

	<h4 class'red', :style='color_name'>
	...
	data() {
		return{
			...
			color_name:'color : blue',
			...
		}
	}


# 3. V-for
반복문 가능
<태그 v-for="작명 in 몇회 " :key="작명">

array 데이터 사용
...
menu_list = [1, 2, ...]
<태그 v-for="작명 in menu_list " :key="작명">

이런식으로 index도 사용할 수 있음 i가 index임
menu_list = [1, 2, ...]
<태그 v-for="(a, i) in menu_list " :key="a">


# 4. Event Handler

해당 상품 신고 버튼 생성

눌렀을 때 자바스크립트 실행하려면

둘 다 vue 문법임
<button v-on:click="신고수++">허위 매물 신고</button><span>신고수 : {{신고수}}</span>
<button @click="신고수++">허위 매물 신고</button><span>신고수 : {{신고수}}</span>

여러가지 이벤트 사용 가능
@mouseover, ... 여러가지 있음


이벤트 옆에 작성한 코드가 길어진다 - 함수로 뜯어냄

함수를 어떻게 만들지? - 만드는 공간이 정해져 있음

methods : {} 안에 만들면 됩니다

data(){
  return {
    신고수 : 0,
  },
  methods : {
    increase(){
      this.신고수 += 1
    }
  }
}
다만 데이터를 사용하고 싶으면 this.데이터이름 이라고 사용해야 합니다.


<div>
  <h4>{{products[0]}}</h4>
  <p>50만원</p>
  <button @click="increase()">허위매물신고</button>
  <span>신고수 : {신고수}</span>
</div>

함수 이름만 작성해도 됩니다.


### 숙제

  <div v-for="i in product_list.length" :key="i">
    <h4>{{ product_list[i - 1] }}</h4>
    <p>{{ price_list[i - 1] }} 만원</p>
    <button @click="increase(i - 1)">허위 매물 신고</button>
    <span>신고수 : {{ report_list[i - 1] }}</span>
  </div>


export default {
  name: "App",
  data() {
    return {
	  ...
      report_list: [0, 0, 0],
      product_list: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      price_list: [10, 20, 30],
	  ...
    };
  },
  methods: {
    increase(index) {
      this.report_list[index] += 1;
    },


# 5 v-if /modal

이미지 넣는법
절대경로(http)는 그냥 넣으면 됨

상대경로
src/assets 안에 파일을 둠
src에 있는거 가져올때는 ./로 지정함
<img src="./assets/room0.jpg">
이런식으로도 가능


    <img :src="require(`${image_list[i-1]}`)"/>

	data() {
    return {
		...
      image_list: [
        "./assets/room0.jpg",
        "./assets/room1.jpg",
        "./assets/room2.jpg",
      ],
	  ...

### 모달창
모달창? - 겉에 흐려지고 내용 보여주는거

ui같은건 갑자기 생기는게 아니라 만들어 두고 보여줬다 안보여줬다 하는거

<div class="black-dg">
    <div class="white-dg">
      <h4>상세페이지임</h4>
      <p>상세 페이지 내용</p>
    </div>
  </div>

body {
  margin :0;
}
div {
  box-sizing:border-box;
}
.black-dg{
  width:100%;height: 100%;
  background:rgba(0,0,0,0.5);
  position:fixed;padding:20px;
}
.white-dg{
  width:100%;
  background:white;
  border-radius:8px;
  padding:20px;
}

동적인 ui 만드는 법
0. HTML CSS 미리 정의해둠
1. ui의 현재 상태를 데이터로 저장해둠
2. 데이터에 따라 ui가 어떻게 보일지 작성

## v-if

조건식에 따라 보여줄지 안보여 줄지 결정함


<div class="black-dg" v-if=modal_use>
<div class="white-dg">
	<h4>상세페이지임</h4>
	<p>상세 페이지 내용</p>
</div>
</div>

	data() {
    return {
		...
      modal_use: true
	  ...

이 상황이면 modal 창이 나타남

# 6. 실제 데이터를 넣어보자
 

실제 쇼핑몰은 서버에서 값을 받아와서 진행
지금은 서버가 없기 때문에 받아왔다고 가정하고 진행

긴 데이터는 js로 따로 관리할 예정
이걸 import 해온다고 함

지금은 assets/data.js 생성

생성된 데이터를 import 하는 방법
우선 data.js를 export 설정을 해줘야함

변수 하나를 export 하는거임
export 한 변수를 다른 파일에서 import 해서 사용하면 됨
export는 보통 최하단에 사용함
export {var1, var2, ..}
import {var1, var2, ...} from  './location' 이런식으로 진행
이 방식일때는 변수명 통일 해야함

import 할때는 
import apple from './assets/data.js'

이제 실제 데이터를 상품 목록에 박아 넣자

HTML 속성 안에 데이터 바인딩은 :속성='data' 이런식으로 진행

결과 

  <div v-for="item in oneroom_list" :key="item">
    <img
      class="room-img"
      @click="modal_use = true"
      :src='item.image'
    />
    <h4>{{ item.title }}</h4>
    <p>{{ item.content }}</p>
    <p>{{ item.price }} 원</p>
  </div>
</template>

모달창 생성 시 해당 상품의 상세 페이지가 뜨도록 만들기
각 상품 별 모달창을 만들어야 하나? - 아니지. 하나 만들고 해당 모달의 내부 값을 바꿔주면 됩니다.


  <div class="black-dg" v-if="modal_use">
    <div class="white-dg">
      <h4>{{ oneroom_list[0].title }}</h4>
      <p>{{ oneroom_list[0].content }}</p>
      <button @click="modal_use = false">닫기</button>
    </div>
  </div>
  이렇게 해놓고 선택된 id를 넣어주면 되겠다.


<template>
  <div class="black-dg" v-if="modal_use">
    <div class="white-dg">
      <h4>{{ oneroom_list[show_oneroom_id].title }}</h4>
      <p>{{ oneroom_list[show_oneroom_id].content }}</p>
      <button @click="modal_use = false">닫기</button>
    </div>
  </div>
  <div class="menu">
    <a v-for="test in menu_list" :key="test">{{ test }}</a>
  </div>
  <h1>{{ logo }}</h1>
  <div v-for="item in oneroom_list" :key="item">
    <img class="room-img" :src="item.image" />
    <h4
      @click="
        modal_use = true;
        show_oneroom_id = item.id;
      "
    >
      {{ item.title }}
    </h4>
    <p>{{ item.content }}</p>
    <p>{{ item.price }} 원</p>
  </div>
</template>

### v-else
v-if 가 아니면 else를 보여주세요


# Component?
긴 html을 줄여서 작성 할 수 있도록 하는거

할인 베너는 대충 만들어 보자
 <div class="discount">
    <h4>지금 결제하면 20% 할인</h4>
  </div>

이 html들을 한 글자로 줄일 수 있다 - component
컴포넌트를 만들고 싶음 vue 파일 하나 넣으면 됨
다만 형식을 지켜야함
<template>
  <div class="discount">
    <h4>지금 결제하면 20% 할인</h4>
  </div>
</template>

<script>
export default {
    name:'Discount',
};
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>

이제 이걸 어떻게 가져다 쓰나
<Discount/> - 이렇게 해도 됩니다.
아님 이렇게 <Discount></Discount>

다만 가져올때 해야할 3 단계가 있음
1. import
import Discount from "./Discount.vue";
2. 등록
  components: {
    사용할컴포넌트 : Discount
    },
3. 사용
<사용할컴포넌트/> - 이렇게 해도 됩니다.
아님 이렇게 <사용할컴포넌트></사용할컴포넌트>

굳이 왜 컴포넌트를 사용할까?
코드 관리하기 편하려고 - 분리해서 사용하면 쓰기 좋잖아
재사용도 쉬워짐

반복적으로 사용할 부분만 컴포넌트화 하는걸 좋음

모달창도 컴포넌트화 해보자
분리 했는데 왜 안뜰까? - 모달창에 데이터 바인딩을 해뒀는데 다른 파일엔 데이터가 없기 때문임
- 데이터를 어떻게 넘겨줄까? - 이게 컴포넌트의 단점 - 데이터 관리가 복잡해짐

# 9. Props
컴포넌트에 값을 넘겨줄 수 없어서 modal이 뜨지 않았음
데이터 바인딩은 같은 파일 내의 data만 가져다 쓸 수 있음
그럼 이걸 어떻게 하느냐
data를 복붙하냐? - 하지마 제발 - 하나의 데이터로만 관리하자

보통 한군대에다 데이터를 몰아두고 필요할때 가져다 쓰는 방식으로 진행함
가져다 쓰는거 - props

부보/자식 컴퍼넌트
App.vue / Modal.vue

자식 컴포넌트가 부모 컴포넌트의 값을 가져오려면 props로 데이터를 전송 해야함
과정 3가지
1. 전송
<Modal : oneroom_list="oneroom_list"></Modal>
2. 등록
export default {
    name:'Modal',
    props:{
       oneroom_list:Object, 
    }
}
이 자료형은 틀려도 됨 - 디버그 용임
3. 사용
<h4>{{ oneroom_list[show_oneroom_id].title }}</h4>
      

다른 값들도 가져오자
1. 
<Modal
    :oneroom_list="oneroom_list"
    :show_oneroom_id="show_oneroom_id"
    :modal_use="modal_use"
  ></Modal>

2. 
  props: {
    oneroom_list: Object,
    show_oneroom_id: Number,
    modal_use: Boolean,
  },
};
3. 
      <h4>{{ oneroom_list[show_oneroom_id].title }}</h4>
      <img class="room-img" :src="oneroom_list[show_oneroom_id].image" />
      <p>{{ oneroom_list[show_oneroom_id].content }}</p>
      <p>{{ oneroom_list[show_oneroom_id].price }} 원</p>


받아온 데이터는 수정하지 말자 Read  Only임

아니 그럼 Modal.vue에 데이터 만들면 되지 않음?
- 하위 컴포넌트에 값을 만들어도 되지만 부모에서도 사용하면 부모에 만들어두셈
그래서 가급적 데이터를 사용하는곳 들 중에 최상위에 데이터를 선언해두자

숙제 상품목록도 컴포넌트로 바꾸자 - 이름은 Card
데이터 수정은 우선 무시하고 진행

  <Card 
    :oneroom_list="oneroom_list"
    :show_id="item.id"
    v-for="(item) in oneroom_list" :key="item">
    </Card>




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

숙제 풀이
