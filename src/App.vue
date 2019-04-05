<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #app {
    height: 100%;
    width: 100%;
  }

  .ant-layout-has-sider {
    height: 100%;
  }

  .main-enter, .main-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .main-enter-active {
    transition: all 0.2s;
  }

  .main-leave-active {
    transform: translateX(-30px);
    transition: all 0.2s;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  /*数字输入框按钮*/
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield
  }
</style>
