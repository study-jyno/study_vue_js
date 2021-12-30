# 1. 환경 구성

`vue craete blog`

`npm run serve`

구동 확인 완료

메인페이지에 상단 메뉴 등 해야할게 많음
이거 일일이 생성하기 귀찮음 - bootstrap 사용

Bootstrap 쓰면 복붙으로 사용 가능 - 단 사용 시 버전 체크 잘 하세요
버전에 따라 브라우저에서 실행 유무가 달라짐
버전은 암거나 하고 css, js 붙여넣자

아래 2개의 링크를 `index.html`에 넣어주자

```HTML
<!DOCTYPE html>
<html lang="">
<head>
  ...
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  ...
</head>
<body>
  ...
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>
```

이렇게 하면 다른 사이트의 js를 가져오는거임 - 해당 서버에 문제 생기면 내 홈페이지에도 문제 생김 - 내 서버에서 배포해보자
- npm 사용해보자
  - 주의사항 - 기존에 미리보기 띄우던 터미널을 종료하고 설치하셈
  - `npm install bootstrap`
  - 아니 이거 왜 안되?
  - m1은 안되는듯 - `yarn` 으로 설치 완료
  - `yarn add bootstrap`

그 다음 `main.js`에 2줄 추가한다
```js
...
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
...
```

https://getbootstrap.com/docs/4.5/getting-started/download/#yarn
- npm 으로는 안됩니다. m1이라 그런가 따라서 yarn 으로 진행하겠습니다.
- `vue create blog --packageManager yarn`
- `cd blog`
- `yarn add bootstrap`
- `yarn add @popperjs/core` 이게 필요하답니다
- `yarn serve`
- 서버 구동 완료
  
아래처럼 사용하면 됨

```HTML
<template>
<button type="button" class="btn btn-primary">Primary</button>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

아니 css는 잘 되는데 왜 js가 안먹지?

아래와 같이 `main.js` 임포트 방법을 변경했습니다 - 정상 작동 확인
```js
import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'


createApp(App).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
```

이제 숙제 합시다

