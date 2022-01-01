import { createWebHistory, createRouter } from "vue-router";
// 라이브러리 명을 적으면 라이브러리를 임포트 해서 쓰는겁니다
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import ErrorPage from './components/ErrorPage.vue'

const routes = [
    {
        //이 경로로 들어오면 이 컴포넌트를 보여줘라
        path: "/list",
        component: List,
    },
    {
        path: "/",
        component: Home,
    },
    {
        path: "/detail/:id",
        // 소괄호 안에 정규 표현식 입역 가능 - 지금은 숫자만 찾아줌
        // path: "/detail/:id(\\d+)",
        // /id/id/id 이런식으로 중복해라 라는 의미 - 검색이 필요하면 vue-router 4 참고
        // path: "/detail/:id*",
        component: Detail,
    },
    {
        path: "/:anything",
        component: ErrorPage,
    },
];
// vue-router4 사용법 대로 createRouter() 안에 설정 막 집어넣으면 끝
// 세부 설정만 만지면 됨
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 