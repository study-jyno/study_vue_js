# 1. 환경 구성
## 1. 설치

1. Node.js 설치
뭐 설정하지 말고 그냥 진행

2. vscode 설치
나는 pycharm 쓰고 싶지만 하란대로 해보자

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

`vue create vuedongsan`

vue3 선택하면 됨

vuedongsan 폴더 생성됨
폴더 안에 src/App.vue 가 매인 페이지 임

```HTML
<template> <!--안에는 HTML 짜고-->
<script>  <!--안에는 js 짜면 됩니다-->
<style>  <!--안에는 css 짜면 됩니다.-->
```

## 3. 짠 코드를 보고싶다?

`npm run serve`

node js 왜 설치함?
- npm,쓰려고 각종 웹 개발 라이브러리 설치 도우미

npm으로 @vue/cli 설치함
- vue 프로젝트 빠르게 생성해주는 라이브러리

프로젝트 생성은 `vue create PROJECT_NAME`

`App.vue`가 메인 페이지

### web browser는 vue 파일을 못읽음
- 그럼 어떻게 읽음?
- html에 vue를 박아넣음 - 아직은 몰라도 됨

1. node_modules : 프로젝트에 쓰는 라이브러리들
2. srs source code location
3. public html, 기타 파일 보관
4. package.json 라이브러리 버전, 프로젝트 설정 기록

# 2. Data Binding
temlate에 평소 css , html 하던대로 하다가 vue 문법이 필요하면 사용

데이터 바인딩? - Js데이터를 HTML에 꽂아넣는 문법

js `getElementBy__.innerHTML = Data` -> 너무 번거로움

vue는 값을 넣어두는 통이 있음
```javascript
data(){
  return{
    price1:60
  }
}
```

데이터는 `object` 자료형임 - JSON

생성한 Data를 어떻게 사용하나
* template 내에서 {{ price1 }} 이렇게 해주면 됨

이 문법을 왜 쓰는가?
* 나중에 변경을 쉽게 할 수 있도록 하드코딩 하지 않는거임
* 실시간 렌더링 기능을 이용하려고 - 그냥 하드코딩 안하려고 하는거임
* data에 있는 값이 변동되면 실시간으로 감지해 새로 그려줌 - 일일이 redraw할 필요 없음

자주 변경될 일 없는 데이터들은 뭐 굳이 할 필요 없음

이런식도 가능

HTML 속성도 데이터 바인딩 가능

단 속성에 넣고 싶을때는 : 으로 지정
```HTML
<h4 class='red', :style='color_name'>
...
data() {
  return{
    ...
    color_name:'color : blue',
    ...
  }
}
```

# 3. V-for
반복문 가능

`<태그 v-for="작명 in 몇회 " :key="작명">`

array 데이터 사용

`menu_list = [1, 2, ...]`

`<태그 v-for="작명 in menu_list " :key="작명">`

이런식으로 index도 사용할 수 있음 i가 index임

menu_list = [1, 2, ...]

`<태그 v-for="(a, i) in menu_list " :key="a">`


# 4. Event Handler

해당 상품 신고 버튼 생성

눌렀을 때 자바스크립트 실행하려면

둘 다 vue 문법임
```HTML
<button v-on:click="신고수++">허위 매물 신고</button><span>신고수 : {{신고수}}</span>

<button @click="신고수++">허위 매물 신고</button><span>신고수 : {{신고수}}</span>
```

여러가지 이벤트 사용 가능
- @mouseover, ... 여러가지 있음


이벤트 옆에 작성한 코드가 길어진다 - 함수로 뜯어냄

함수를 어떻게 만들지? - 만드는 공간이 정해져 있음

methods : {} 안에 만들면 됩니다
```Javascript
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
```
다만 `methods` 내에서 선언된 데이터를 사용하고 싶으면 `this.데이터이름` 이라고 사용해야 합니다.

```HTML
<div>
  <h4>{{products[0]}}</h4>
  <p>50만원</p>
  <button @click="increase()">허위매물신고</button>
  <!-- <button @click="increase">허위매물신고</button> -->
  <!-- 함수 이름만 작성해도 됩니다. -->
  <span>신고수 : {신고수}</span>
</div>
```


### 숙제

```HTML
<template>
  <div v-for="i in product_list.length" :key="i">
    <h4>{{ product_list[i - 1] }}</h4>
    <p>{{ price_list[i - 1] }} 만원</p>
    <button @click="increase(i - 1)">허위 매물 신고</button>
    <span>신고수 : {{ report_list[i - 1] }}</span>
  </div>
</template>

<script>
...
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
    ...
  }
}
</script>
```

# 5. v-if /modal

이미지 넣는법
- 절대경로(http)는 그냥 넣으면 됨

상대경로
- src/assets 안에 파일을 둠
- src에 있는거 가져올때는 ./로 지정함

`<img src="./assets/room0.jpg">`

아래 방식으로도 가능

```HTML
<img :src="require(`${image_list[i-1]}`)"/>

<script>
data() {
  return {
  ...
    image_list: [
      "./assets/room0.jpg",
      "./assets/room1.jpg",
      "./assets/room2.jpg",
    ],
  ...

</script>
```
## 모달창
모달창? - 겉에 흐려지고 내용 보여주는거

ui같은건 갑자기 생기는게 아니라 만들어 두고 보여줬다 안보여줬다 하는거

```HTML
<div class="black-dg">
  <div class="white-dg">
    <h4>상세페이지임</h4>
    <p>상세 페이지 내용</p>
  </div>
</div>

<style>
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
</style>
```
### 동적인 ui 만드는 법
1. HTML CSS 미리 정의해둠
2. ui의 현재 상태를 데이터로 저장해둠
3. 데이터에 따라 ui가 어떻게 보일지 작성

## v-if

조건식에 따라 보여줄지 안보여 줄지 결정함

```HTML
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
```
이 상황이면 modal 창이 나타남

# 6. 실제 데이터를 넣어보자

실제 쇼핑몰은 서버에서 값을 받아와서 진행

지금은 서버가 없기 때문에 받아왔다고 가정하고 진행

긴 데이터는 js로 따로 관리할 예정 - 이걸 import 해온다고 함

지금은 assets/data.js 생성

생성된 데이터를 import 하는 방법

1. 우선 data.js를 export 설정을 해줘야함
2. 변수 하나를 export 하는거임
3. export 한 변수를 다른 파일에서 import 해서 사용하면 됨
4. export는 보통 최하단에 사용함
5. export {var1, var2, ..}
6. import {var1, var2, ...} from  './location' 
7. 이 방식일때는 변수명 통일 해야함

import 할때는 `import apple from './assets/data.js'`

이제 실제 데이터를 상품 목록에 박아 넣자

HTML 속성 안에 데이터 바인딩은 :속성='data' 이런식으로 진행

결과 
```HTML
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
```
모달창 생성 시 해당 상품의 상세 페이지가 뜨도록 만들기

각 상품 별 모달창을 만들어야 하나? 
- 아니지. 하나 만들고 해당 모달의 내부 값을 바꿔주면 됩니다.

```HTML
  <div class="black-dg" v-if="modal_use">
    <div class="white-dg">
      <h4>{{ oneroom_list[0].title }}</h4>
      <p>{{ oneroom_list[0].content }}</p>
      <button @click="modal_use = false">닫기</button>
    </div>
  </div>
```
이렇게 해놓고 선택된 id를 넣어주면 되겠다.

```HTML
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
```

### v-else
v-if 가 아니면 else를 보여주세요


# Component?
긴 html을 줄여서 작성 할 수 있도록 하는거

할인 베너는 대충 만들어 보자
```HTML
 <div class="discount">
    <h4>지금 결제하면 20% 할인</h4>
  </div>
```
이 html들을 한 글자로 줄일 수 있다 - component
컴포넌트를 만들고 싶음 vue 파일 하나 넣으면 됨
다만 형식을 지켜야함
```HTML
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
```
이제 이걸 어떻게 가져다 쓰나

1. `<Discount/>` - 이렇게 해도 됩니다.
2. 아님 이렇게 `<Discount></Discount>`

다만 가져올때 해야할 3 단계가 있음
1. import

    `import Discount from "./Discount.vue";`
2. 등록
    ```
      components: {
        사용할컴포넌트 : Discount
        },
    ```
3. 사용

    <사용할컴포넌트/> - 이렇게 해도 됩니다.

    아님 이렇게 <사용할컴포넌트></사용할컴포넌트>

굳이 왜 컴포넌트를 사용할까?

1. 코드 관리하기 편하려고 - 분리해서 사용하면 쓰기 좋잖아
2. 재사용도 쉬워짐

반복적으로 사용할 부분만 컴포넌트화 하는걸 좋음

모달창도 컴포넌트화 해보자

분리 했는데 왜 안뜰까? - 모달창에 데이터 바인딩을 해뒀는데 다른 파일엔 데이터가 없기 때문임

- 데이터를 어떻게 넘겨줄까? - 이게 컴포넌트의 단점 - 데이터 관리가 복잡해짐

# 9. Props

컴포넌트에 값을 넘겨줄 수 없어서 modal이 뜨지 않았음

데이터 바인딩은 같은 파일 내의 data만 가져다 쓸 수 있음

그럼 이걸 어떻게 하느냐

data를 복붙하냐? - 하지마 제발 
- 하나의 데이터로만 관리하자

보통 한군대에다 데이터를 몰아두고 필요할때 가져다 쓰는 방식으로 진행함

가져다 쓰는거 - `props`

부보/자식 컴퍼넌트
`App.vue` / `Modal.vue`

자식 컴포넌트가 부모 컴포넌트의 값을 가져오려면 props로 데이터를 전송 해야함

1. 전송

    `<Modal : oneroom_list="oneroom_list"></Modal>`

2. 등록
    ```HTML
    export default {
        name:'Modal',
        props:{
          oneroom_list:Object, 
        }
    }
    ```
    자료형은 틀려도 됨 - 디버그 용임
3. 사용
    ```HTML
    <h4>{{ oneroom_list[show_oneroom_id].title }}</h4>
    ```
      

다른 값들도 가져오자

1. 
    ```HTML
      <Modal
          :oneroom_list="oneroom_list"
          :show_oneroom_id="show_oneroom_id"
          :modal_use="modal_use"
        ></Modal>
    ```

2. 
    ```HTML
      props: {
        oneroom_list: Object,
        show_oneroom_id: Number,
        modal_use: Boolean,
      },
    };
    ```

3.
    ```HTML
    <h4>{{ oneroom_list[show_oneroom_id].title }}</h4>
    <img class="room-img" :src="oneroom_list[show_oneroom_id].image" />
    <p>{{ oneroom_list[show_oneroom_id].content }}</p>
    <p>{{ oneroom_list[show_oneroom_id].price }} 원</p>

    ```
받아온 데이터는 수정하지 말자 Read Only임

아니 그럼 Modal.vue에 데이터 만들면 되지 않음?
- 하위 컴포넌트에 값을 만들어도 되지만 부모에서도 사용하면 부모에 만들어두셈

그래서 가급적 데이터를 사용하는곳 들 중에 최상위에 데이터를 선언해두자

숙제 상품목록도 컴포넌트로 바꾸자 - 이름은 Card

데이터 수정은 우선 무시하고 진행
```HTML
  <Card 
    :oneroom_list="oneroom_list"
    :show_id="item.id"
    v-for="(item) in oneroom_list" :key="item">
    </Card>
```


```HTML
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
```

오브젝트 key=value 를 일일이 바인딩 해서 보내지 말고

v-bind="오브젝트" 이렇게 전달하면 key=value 형식으로 전달됨


# 11. Custom Event

modal을 다시 띄워보자

### 왜 지금 못했지? 
- 데이터가 부모에 있는건데 자식은 부모의 값을 수정할 수 없음

### 그럼 어떻게 하냐 
- custom event 를 사용함

### 그럼 부모에서 card 호출 할 때 click 이벤트를 추가 
- 이벤트 버블링 발생 - 문제가 있으니 다른 방법을 해보자

그럼 제목을 눌렀을 때 modal_use 값을 바꿔보자

custom event - 자식이 부모한테 메세지를 보내는 개념임

보내는법 수신하는법 2가지로 나눠져있음

`$emit('작명', 데이터)` -  부모에게 메세지 전송

`@click="$emit('openModal')` 
- 이러면 부모가 openModal 메세지를 전송 받음

```HTML
  <Card
    @openModal="modal_use = true; show_oneroom_id = $event"
```

이러면 openModal 데이터가 전송되면 오른쪽 자바스크립트를 실행함

자식이 보낸 데이터는 $event 변수에 담겨있음

자식이 부모에 있는 데이터를 변경하고 싶지만 그럴 수 없음

그래서 자식은 부모에게 메세지만 보내고 `($emit('message_name', data_1, ...))`

부모가 그 이벤트를 수신할 때 `<자식컴포넌트 @message_name=''>` 이런식으로 수신

`$emit`을 함수 안에서 하고 싶으면

```HTML
<script>
  methods:{
    function(){
      this.$emit('openModal', 원룸.id)
    }
  }
</script>
```

# 12. 사용자의 인풋을 받는 법

`@input`
입력할 때마다 뭐 실행해주셈

`@change`
입력하고 커서 밖에 찍으면 실행해주셈

둘이는 갱신 시점이 다름
- 입력마다 할지 입력 완료 하고 할지 결정하는거

이벤트 리스너를 넣자

이벤트 리스너?
- 이벤트가 발생한 타켓의 정보를 알 수 있음

`<input @input="month = $event.target.value">`

$event.target.value => 인풋에 입력한 값 - 생 자바스크립트 문법임

아래같이 진행 하면 됨

```HTML
<template>
  <div class="black-dg" v-if="modal_use">
    <div class="white-dg">
      <h4>{{ oneroom_list[show_oneroom_id].title }}</h4>
      <img class="room-img" :src="oneroom_list[show_oneroom_id].image" />
      <p>{{ oneroom_list[show_oneroom_id].content }}</p>
      <input @input="month = $event.target.value" />
      <p>
        {{ month }} 개월 선택함 :
        {{ month * oneroom_list[show_oneroom_id].price }} 원
      </p>
      <p>{{ oneroom_list[show_oneroom_id].price }} 원</p>
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
  props: {
    oneroom_list: Object,
    show_oneroom_id: Number,
    modal_use: Boolean,
  },
};
</script>

```


이거의 축약 버전이 있음 - v-model - 아래 두 결과가 똑같음\
```HTML
<input @input="month = $event.target.value" />
<input v-model="month"/>

<!-- 여러가지 v-model 전부 가능 -->

<input v-model="month"/>
<textarea v-model="month"/>
```

여러개 다 가능하지만 초기 설정값에 선언한 대로 받아서 넣어주기 때문에 유의해야함
지금 숫자로 선언했기 떄문에 textarea에서 string 넣어주면 NaN에러 발생함

```HTML
<input v-model="month" />
<textarea v-model="month">
<select v-model="month">
    <option>1</option>
    <option>2</option>
    <option>3</option>
</select>
```

여러가지 방법 가능

주의 - 사용자가 input에 입력한 것은 전부 문자자료형

```HTML
<input v-model="month" />
<p>
  {{ month }} 개월 선택함 :
  {{ month + oneroom_list[show_oneroom_id].price }} 원
</p>
```

이런식으로 문자를 넣으면 아래와 같이 문제 발생

`3222 개월 선택함 : 3222340000 원`

따라서 숫자로 변환해서 받아야함

```HTML
<input v-model.number="month" />
<p>
  {{ month }} 개월 선택함 :
  {{ month + oneroom_list[show_oneroom_id].price }} 원
</p>
```

`11123 개월 선택함 : 351123 원`

하지만 문자 입력을 막을 순 없음 - 이걸 막을 수 있음

# 13.watch
인풋에 제한을 두자

input에 문자 입력하면 경고문을 띄우고 싶다 - watch

데이터 감시하려면 `watch:{}`
```HTML
<script>
export default {
  name: "Modal",
  data() {
    return {
      month: 1,
    };
  },

  watch: {
    month() {},
    # month 라는 데이터가 변할 때 마다 여기있는 코드 실행됨

  },
  ...
};
</script> 
```
```
    month(a) { // a == month 데이터임
        // 사용자가 month를 글자로 입력하면 경고문 띄워주셈
        // 사용자가 month에 입력한 데이터가 13보다 크면 경구몬 띄우기
        if(a >= 13){
            alert('13 이상 입력하지 마셈');
        }
    },
```

숙제
```HTML
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
```

여러가지 폼 벨리데이션 가능함
- 라이브러리 설치하셈 - 그럼 굳이 watcher 사용 한해도 됨


# 14. Transition

모달창 뜰 때 야니메이션 넣어보자

CSS로 애니메이션 줄 수 있음
1. 시작 전 class 명
2. 애니메이션 끝난 후 Class 명
3. 그리고 원할 때 2번 class 명 부착


```HTML
<div class="start end">
  <Modal
    @closeModal="modal_use = false"
    :oneroom_list="oneroom_list"
    :show_oneroom_id="show_oneroom_id"
    :modal_use="modal_use"
  ></Modal>
</div>
.start {
  opacity: 0; # 보여줄지 말지
  transition: all 1s; # 해당 엘리먼트의 모든 요소 1초동안 변하게 함
}

.end {
  opacity: 1;
}
```

이제 모달창 열렸니가 True 일때만 .end를 부착해 보자.

### class 명을 조건부로 넣을려면
```HTML
<!-- <div class="start" :class="{class_name : TRUE|FALSE }"> -->
<div class="start" :class="{end : modal_use}">
```

이거보다 쉽게 할 수 있음 - vue 에서 <transition> 기능을 제공해줌

1. 애니메이션 주고싶은 요소를 <transition>으로 감싸기
```HTML
<transition name="fade">
  ...
</transition>
```

2. class 명 3개 작성 - style안에 작성
```CSS
.이름-enter-from {
  시작 스타일
}
.이름-enter-active {
  transition
}
.이름-enter-to {
  끝날 때 스타일
}
```
```CSS
.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0);
}
/* 퇴장 시 애니메이션을 주고 싶으면 enter를 leave로 바꿔서 작성하면 됨 */
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  transform: translateY(-1000px);
}
```

# 15. sort

정렬 버튼을 만들어 보자

data의 데이터들을 정렬하면 됩니다.

예전에 javascript였다면 2단계로 진행해야함
1. 정렬
2. HTML에 반영해 주세요

vue는 이렇게 안하고 값만 정렬하면 됨 - data가 변동되면 알아서 반영하기 때문

```HTML

<script>

export default {
  name: "App",
  data() {
    return {
      ...
      oneroom_list: oneroom,
      ...
    };
  },
  methods: {
    ...
    prioceSort(){     
      this.oneroom_list.sort(function(a, b){
        return a.price  - b.price
      });
      /*
      왜 이렇게 하는가
      sort는 근본이 문자열 정렬
      따라서 숫자 정렬로 로직을 사용하기 위해서 - 연산 시행

      주의 - sort는 원본을 변형 시켜버림
            map을 사용해서 값을 유지할 수 있음
      */
    }
    }
    ...
  },
};
</script> 
```

이렇게 하면 sort에서 원본 값을 변경시켜버림 - 요즘 유행은 원본 데이터는 유지하는게 좋음

따라서 오리지널을 유지하고 복사본을 변경시키자
```HTML

<script>
import oneroom from "./assets/data.js";

import Discount from "./Discount.vue";
import Modal from "./Modal.vue";
import Card from "./Card.vue";

export default {
  name: "App",
  data() {
    return {
      ...
      oneroom_list_original: oneroom,
      oneroom_list: oneroom,
      /*
      여기가 문제임 - 각각 다른 array 를 만들어 주는게 아니라
      같은 array를 가져다 쓰는거임
      그럼 어떻게 해?
      oneroom_list_original : [...oneroom]
      */
    };
  },
  methods: {
    ...
    priceSort(){
      this.oneroom_list.sort(function(a, b){
        return a.price  - b.price
      });
    },
    sortBack(){
      this.oneroom_list = this.oneroom_list_original
      /*
      여기가 문제임 - Array 에서 = 연산은 call by reference 해버림
      새로 생성해서 줘야함

      this.oneroom_list = [...this.oneroom_list_original]
      */
    }
  },
  ...
};
</script> 
```
이렇게 하면 될거 같다?
- 아닐거 같은데 call by reference라 되돌리고 나면 망가질듯
- 위의 주석이 문제였고 주석처엄 별도의 로딩을 해줘야함
- 하지만 몇번 하다보면 또 정렬 안되기 시작함
- sortBack의 주석으로 해결

# 16. Lifecycle Hooks

할인창 같은걸 표시 후 2초뒤에 없에고 싶다? - Lifecycle로 처리함

Vue 공식문서에서 Lifecycle을 설명함 - 이게 뭐냐

컴포넌트들이 생겼다 삭제되는 과정
1. create stap - data 존재
2. mount - 데이터를 html을 장착하는 단계
3. updata - HTML이 실시간 재 렌더링이 된다 - 실제로는 HTML이 바뀌는게 아니라 컴포넌트가 바뀌는거임
4. unmount - 삭제

이걸 왜 배우냐?
- 각 상태 변환 과정 마다 hook을 걸어서 각 단계 시행 전 뭘 해달라 요청할 수 있음

<b>Lifecycle Hook을 쓰려고 Lifecycle을 배우는거임</b>

훅은 어디다 거는가?
```HTML
<template>
...
<Discount v-if="showDiscount == true"></Discount>
...
</template>
<script>
...
export default {
  name: "App",
  data() {
    return {
      ...
      showDiscount: true,
    };
  },
  methods: {
    ...
  },
  // 여기에 위치함
  // mounted 말고 다른 훅들도 존재함
  // https://v3.ko.vuejs.org/api/options-lifecycle-hooks.html
  mounted() {
    // setTimeout JS 문법임
    // ()=> 이거 뭐임? arrow function
    // this 쓸 때 이렇게 하랍니다. - 찾아봐야겠다
    // 바깥에 있는 this를 제대로 가져다 쓸 수 있다네요
    // this를 쓸 일이 있다면 다 arrow function을 사용하자
    setTimeout(()=>{
      this.showDiscount = false;
    }, 2000)
  },
  components: {
    Discount: Discount,
    ...
  },
};
</script> 

```

이건 모든 컴포넌트에서 사용할 수 있음
- modal.vue에 작성하면 modal이 mount 되자마자 해주세요 라고 할 수 있음

이걸 더 요긴하게 사용할 수 있는건 서버에서 AJAX로 데이터 가져올 때 lifecycle hook 안에서 사용함
- created(HTML 생성 전), mounted 에서 함

숙제
1. 1초마다 할인율 1퍼씩 떨구기
2. modal input 안에 2를 기입했을 때 3개월 부터 판매한다고 알람을 띄우기
        
    watcher로 하면 될듯

### 숙제
```HTML
<!-- App.vue -->
<template>
  ...
  <Discount :discountNumber="discountNumber" v-if="showDiscount == true"></Discount>
  ...
</template>

<script>
import Discount from "./Discount.vue";
...
export default {
  name: "App",
  data() {
    return {
      ...
      discountNumber:30,
    };
  },
  methods: {
    ...
  },
  mounted() {
    setInterval(()=>{
      this.discountNumber -= 1;
    }, 1000)
    // 할인율 1초마다 떨구기
  },
  components: {
    Discount: Discount,
  },
};
</script>
...
```

```HTML
<template>
  <div class="discount">
    <h4>지금 결제하면 {{ discountNumber }}% 할인</h4>

    <!-- 할인율 1초마다 떨구기 -->
  </div>
</template>

<script>
export default {
  name: "Discount",
  props: {
    discountNumber: Number,
  },
};
</script>
...
```

```HTML
<!-- 2. 3개월 부터 판매함 -->
<template>
  ...
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      month: 3,
    };
  },
  ...
  // watcher 말고 updated를 사용해서 해보자
  // nextTick?
  /*
  updated는 모든 하위 컴포넌트가 다시 렌더링되었음을 보장하지 않습니다. 전체 화면이 재렌더링 될 때까지 기다리려면, updated 내부에서 vm.$nextTick를 사용합니다
  */
  updated() {
    this.$nextTick(() => {
      if (this.month <= 2) {
        alert("3개월 이상 판매함");
        this.month = 3;
      }
    });
  },
  ...
};
</script>
...
```
2번 다른 방법
```
beforeUpdate(){
    if (this.month == 2){
      alert('2개월은 너무 적음.. 안팝니다')
    }
 }
```
