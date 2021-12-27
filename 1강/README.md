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