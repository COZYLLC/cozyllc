<template>
  <div id="notfound">
    <img :src="require('@/assets/404.png')" />
    <p class="title is-3">404<br />페이지를 찾을 수 없어요..</p>
  </div>
</template>
<style>
#notfound {
  margin-top: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10vh 0;
}
@media screen and (max-width: 1023px) {
  #notfound {
    flex-direction: column;
  }
}
</style>