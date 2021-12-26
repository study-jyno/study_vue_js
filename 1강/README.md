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
