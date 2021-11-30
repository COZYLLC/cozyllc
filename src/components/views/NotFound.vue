<template>
  <div id="notfound">
    <img
      :src="require('@/assets/404.png')"
      style="width: 15vw; margin-right: 5vw"
    />
    <span>
      <p class="title is-1">404</p>
      <p class="subtitle is-5">페이지를 찾을 수 없어요..</p>
    </span>
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
