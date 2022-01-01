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
대충 합시다
```HTML
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Jyno</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >Disabled</a
          >
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
  <br />
  <div class="container">
    <div class="row">
      <div class="col-4">
        <img
          src="./assets/profile.jpeg"
          class="img-fluid"
          alt=/assets/profile.jpeg"
        />
      </div>
      <div class="col-8">
        <div class="card">
          <div class="card" style="width: 18rem"></div>
          <div class="card-body">
            <h5 class="card-title">안녕하세요. Vue.js를 공부하고 있는 devjyno96 입니다.</h5>
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
  </div>
</template>

<script>
export default {
  name: "App",
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
</style>
```

# 17. blog data binding

`List.vue` 글 목록 페이지 만들기

`src/componets` 안에 생성

```HTML
<!-- List.vue -->
<template>
  <div>
    <h5>블로그 글 제목</h5>
    <p>블로그 글 날짜</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
```


```HTML
<!-- App.vue -->
<template>
  ...
    <List></List>
  ...
</template>

<script>
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    List: List,
  },
};
</script>
...
```

이제 List.vue에 실제 데이터를 넣어보자

`.src/assets/listData.js 생성

```js
export default [
    {
        title: '첫 째 프로젝트 : 허위매물 전문 부동산 앱',
        content: 'Vue를 이용하면 비누같이 매끈한 앱을 만들 수 있습니다',
        date: 'September 24, 2021',
        number: 0
    }, {
        title: '둘 째 프로젝트 : 오마카세 배달 앱',
        content: '음식이 아니라 셰프를 직접 배달해드립니다',
        date: 'October 20, 2020',
        number: 1
    }, {
        title: '셋 째 프로젝트 : 현피 앱',
        content: '거리를 설정하면 가장 가까운 파이터를 소개해드려요! 서로 싸워보세요',
        date: 'April 24, 2019',
        number: 2
    }
]
```
```HTML
<!-- App.vue -->
  ...
  <script>
  ...
  import listData from "./assets/listData.js";

  export default {
    name: "App",
    components: {
      ...
      listData: listData,
    },
  };
</script>
```

블로그 글을 생성해 보자 v-for 사용해서

```HTML
<!-- List.vue -->
<template>
  ...
    <List 
    :blogData="item"
    v-for="(item) in listData" :key="item"></List>
  ...
</template>

<script>
import List from "./components/List.vue";
import listData from "./assets/listData.js";

export default {
  name: "App",
  data() {
    return {
      listData: listData,
    };
  },
  components: {
    List: List,
  },
};
</script>
...
```

```HTML
<!-- List.vue -->
<template>
  <div>
    <h5>{{blogData.title}}</h5>
    <p>{{blogData.content}}</p>
    <p>{{blogData.date}}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    blogData: Object,
    show_id: Number,
  },
};
</script>

<style>
</style>
```

**성공!**

다음 강의에서 페이지별로 뜯어보자

`/list` 라는 URL로 접속하면 `<List/>` 를 보여주자


# 18. vue-router

라우터를 이용해 페이지로 쪼개보자

누군가 /list로 접근하면 <List> 로 보여주자

vue router 를 설치하자

설치 전 terminal 실행 서버 종료
- `npm install vue-router@4`
- `yarn add vue-router@4` 저는 yarn으로 진행합니다

이제 라우팅 파일 사용을 위한 세팅을 해보자
- main.js 에서 라우팅 세팅을 함

main.js에서 직접 선언하는게 아니라 다른 파일에서 선언 후 불러온다.

```js
// src/router.js
import { createWebHistory, createRouter } from "vue-router";
// 라이브러리 명을 적으면 라이브러리를 임포트 해서 쓰는겁니다
import List from './components/List.vue'

const routes = [
  {
    //이 경로로 들어오면 이 컴포넌트를 보여줘라
    path: "/list",
    component: List,
  },
  //여러개 하고 싶으면?
  /* 추가하면 됨
  {
    //이 경로로 들어오면 이 컴포넌트를 보여줘라
    path: "/test",
    component: TEST,
  },
   */
];
// vue-router4 사용법 대로 createRouter() 안에 설정 막 집어넣으면 끝
// 세부 설정만 만지면 됨
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
```

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import List from './router.js'
createApp(App).use(List).mount('#app')
```

마지막 설정 남음

```HTML
<template>
  ...
    <!-- <List 
    :blogData="item"
    v-for="(item) in listData" :key="item"></List> -->
    <router-view 
    :blogData="item"
    v-for="(item) in listData" :key="item">
    <!-- router-view가 url에 따라서 보여줌 url이 /list 면 list component 를 보여줄꺼임 물론 지금은 안됨 - 데이터가 없어서 
    그럼 props를 전달 해야는데 어떻게 하지? props 하던대로 하면 됨-->
  ...
</template>

<script>
// import List from "./components/List.vue";
import listData from "./assets/listData.js";

export default {
  name: "App",
  data() {
    return {
      listData: listData,
    };
  },
  components: {
    // List: List,
  },
};
</script>

```

페이지 나눌 땐 router.js만 바꾸면 됨

Home.vue를 추가하고 List.vue의 구조를 바꾸자

```HTML
<!-- Home.vue -->
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
    name : 'Home',
};
</script>
```

```HTML
<!-- List.vue -->
<template>
  <div v-for="(blogData) in listData" :key="blogData">
    <h5>{{blogData.title}}</h5>
    <p>{{blogData.content}}</p>
    <p>{{blogData.date}}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    listData: Object,
  },
};
</script>
```
```HTML
<!-- App.vue -->
<template>
  ...
    <router-view 
    :listData="listData"
    >
    </router-view>
  ...
</template>

<script>
...
import listData from "./assets/listData.js";

export default {
  name: "App",
  data() {
    return {
      listData: listData,
    };
  },
  ...
};
```
```js
//router.js-->
import { createWebHistory, createRouter } from "vue-router";
// 라이브러리 명을 적으면 라이브러리를 임포트 해서 쓰는겁니다
import List from './components/List.vue'
import Home from './components/Home.vue'

const routes = [
    {
        //이 경로로 들어오면 이 컴포넌트를 보여줘라
        path: "/list",
        component: List,
    },
    {
        //이 경로로 들어오면 이 컴포넌트를 보여줘라
        path: "/home",
        component: Home,
    },
];
// vue-router4 사용법 대로 createRouter() 안에 설정 막 집어넣으면 끝
// 세부 설정만 만지면 됨
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 
```
이렇게 페이지별로 나누고 싶으면 컴포넌트로 나누면 됩니다.

`<router-link to='/보낼URL'>` 이런게 있음
다른 페이지 이동 링크 만들 때 쓰는겁니다 오 굳

```HTML
<!-- App.vue -->
<template>
  ...
    <router-link to="/">홈페이지</router-link>
    <br>
    <router-link to="/list">리스트 페이지</router-link>
    <router-view 
    :listData="listData"
    >
    </router-view>
  ...
</template>

<script>
import listData from "./assets/listData.js";

export default {
  name: "App",
  data() {
    return {
      listData: listData,
    };
  },
  ...
};
```

이렇게 사용하면 됩니다

숙제 - 상세 페이지 만들기
/detail 들어갔을 때 detail 컴포넌트로 이동하면 됨 - 내일 하자

1. Detail component 생성
2. list 에서 타이틀 클릭 시 show Datail list id 해당 id 로 변경
3. detal vue에 전달

```HTML
<!-- App.vue -->
<template>
    <!-- custom event 받는 함수 -->
    <!-- @changeShowDetail="changeShowDetailEvent" -->
    <router-view
      @changeShowDetail="changeShowDetailEvent"
      :listData="listData"
      :showDetailListID="showDetailListID"
    >
    </router-view>
</template>

<script>
import listData from "./assets/listData.js";

export default {
  name: "App",
  data() {
    return {
      listData: listData,
      showDetailListID: 0,
    };
  },
  methods: {
    // custom event 받는 함수
    // 날라온 이벤트 값을 app 데이터에 넣어줌
    changeShowDetailEvent($event) {
      this.showDetailListID = $event
    },
  },
};
</script>
```


```HTML
<!-- List.vue -->
<template>
  <div v-for="(blogData, i) in listData" :key="blogData">
    <h5>{{ blogData.title }}</h5>
    <button>
      <!-- App 으로 이벤트를 날림 - index 값을 담아서 날림 -->
      <router-link @click="changeShowDetail(i)" to="/detail">상세 페이지</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    listData: Object,
  },
  methods:{
    // 날리는 함수
    changeShowDetail(showBlogId){
      this.$emit('changeShowDetail', showBlogId);
    },
  }
};
</script>
```


```HTML
<!-- Detail.vue -->
<template>
  <div>
    <!-- 그냥 저장된 값 보여주면 됨 -->
    <h5>{{listData[showDetailListID].title}}</h5>
    <p>{{listData[showDetailListID].content}}</p>
    <p>{{listData[showDetailListID].date}}</p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    listData: Object,
    showDetailListID:Number,
  },
};
</script>
```



## 숙제 완료!


# 19. vue router url parameter

나는 숙제할 때 id를 props로 넘겨 줬는데 파라미터로도 값을 넘겨줄 수 있는듯?

/detail/x 로 접근하면 x번째 게시물 보여주기

1. router 파일 수정
```js
//router.js
const routes = [
  ...
    {
        // 이렇게 쓰면 파라미터 전달 가능
        // : 이건 아무 문자나 사용 가능
        path: "/detail/:id",
        component: Detail,
    },
    ...
];
```

2. router의 값을 vue에서 사용하기
-  url에 있는 값을 어떻게 가져올까?
```HTML
<template>
  <div>
    <!-- $route.params 에 다 들어있음 -->
    <!-- 만약 router.js 에서 /detail/:작명 이런 식으로 선언했으면 $route.params.작명 으로 호출 하면 됨 -->
    <h5>{{listData[$route.params.id].title}}</h5>
    <p>{{listData[$route.params.id].content}}</p>
    <p>{{listData[$route.params.id].date}}</p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    listData: Array,
    showDetailListID:Number,
  },
};
</script>

<style>
</style>
```

이런식으로 data에서 사용 할 수 있음
```HTML
<script>
export default {
  name: "Detail",
  data() {
    return {
      // 이렇게 할 수 있음
      paramsShowDetailListID : this.$route.params.id,
    };
  },
};
</script>
```

파라미터에서 정규표현식으로 엄격하게 규정할 수 있음
```js
// router.js
const routes = [
    {
        path: "/detail/:id(\\d+)",
        // 소괄호 안에 정규 표현식 입역 가능 - 지금은 숫자만 찾아줌
        // /id/id/id 이런식으로 중복해라 라는 의미 - 검색이 필요하면 vue-router 4 참고
        // path: "/detail/:id*",
        component: Detail,
    },
];
```
조건에 맞지 않는 path parameter를 입력하면 라우터를 찾지 못함

404 페이지도 만들 수 있음 - 찾을 수 없는 페이지에 접근 시 404 페이지로 보내주면 됨

```js
...
import ErrorPage from './components/ErrorPage.vue'

const routes = [
  ...
    {
        // 아무 문자열이나 다 받아들임
        //사용시 중복이 될거 같은데? - 순서가 중요함 - router를 위쪽에서 선언하면 우선순위가 높음 - 주의해서 사용하셈
        path: "/:anything",
        component: ErrorPage,
    },
];
...
```

```HTML
<!-- ErrorPage.vue -->
<template>
  <div>
    404 not found
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style>
</style>
```


# 20. nested routes / push

nested route?
- detail/0/author 로 접근하면 작성사 정보 보여주기
- detail/0/comment 로 접근하면 댓글 보여주기
다른 url로 나누고 싶으면 nested route 사용
  
```js
...
const routes = [
  ...
    {
        path: "/detail/:id",
        component: Detail,
        children: [
          // 이런식으로 사용
            {   
                //path: "/author",
                // / 붙이면 안된다 왜? - / 는 root 의미임
                path: "author",
                component: Author,
            },
            {
                path: "comment",
                component: Comment,
            },
        ]
    },
    ...
];
```

list 에서 제목 클릭 시 페이지 이동하게 해보자
```HTML
<!-- List.vue -->
<template>
  <div v-for="(blogData, i) in listData" :key="blogData">
    <h5>{{ blogData.title }}</h5>
    <button>
      <h5 @click="$router.push({name:'detail', params : {id : i} })">상세 페이지</h5>
    </button>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    listData: Object,
  },
};
</script>

<style>
</style>
```

`router.push()`에서 `name`으로 router를 지정하기 때문에 router에서 `name`을 생성해준다

```js
// router.js

const routes = [
    {
        name:'detail',
        path: "/detail/:id",
        ...
    },
];
...
```

페이지 앞으로 가기 뒤로가기 - `$router.go(-1)` 1 이면 앞으로 가기 -1이면 뒤로가기, -2면 2번 뒤로 갑니다.

named views? 여러개 컴포넌트를 보여줄 때 사용 - nav, footer, 이렇게 여러개 보여줄 때 사용함
redirection도 있음 - 여러가지 기능이 많으니 필요할 때 마다 검색해서 사용하세요


