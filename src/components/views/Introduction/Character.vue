<template>
  <div class="page">
    <p class="title heading is-2">캐릭터 소개</p>
    <span v-for="(character, i) in characters" :key="i">
      <div class="product-area">
        <img
          class="product-media"
          :src="require(`@/assets/character/${character.image}`)"
        />
        <div class="product-text">
          <p class="product-title">{{ character.title }}</p>
          <p v-for="(text, j) in character.text" :key="j" v-html="text">
            {{ text }}
          </p>
        </div>
      </div>
    </span>
    <a :href="getImageUrl()">
      <b-button class="is-primary">캐릭터 배경화면 다운로드</b-button>
    </a>
  </div>
</template>
<script>
export default {
  methods: {
    getImageUrl() {
      console.log(`${window.location.origin}/images/wallpaper.jpg`);
      return `${window.location.origin}/images/wallpaper.jpg`;
    },
  },
  data() {
    return {
      characters: [
        {
          title: "패키 (Packy)",
          text: [
            "설명 : 사람들에게 도움을 주던 존재였지만 버려지고 다시 한 번 사랑받고자 사람들을 도와주는 캐릭터",
            "특징 : 밟혀서 찢어진 눈<br/>발자국이 남은 몸<br/>소심함<br/>마음이 여림",
          ],
          image: "packy.png",
        },
        {
          title: "패로 (Farrow)",
          text: [
            "설명 : 편리한 패트병이지만 찌그러지고 낡아 버려졌다.<br/>하지만 본인은 그걸 모르고 자신이 훌륭한 패트병이라 생각하는 캐릭터",
            "특징 : 굽어진 허리<br/>라벨망토<br/>자신만만한 표정<br/>영웅적인 면모",
          ],
          image: "farrow.png",
        },
        {
          title: "퓨 (Piow)",
          text: [
            "설명 : 사람들에게 따뜻함을 주던 존재였지만 낡고 해져 버림받았다.<br/>하지만 사람들에게 다시 따뜻함을 주고 싶어하는 캐릭터",
            "특징 : 터진 머리<br/>맹한 성격<br/>입이 지퍼로 닫혀있어 과묵함",
          ],
          image: "piow.png",
        },
        {
          title: "리키 (Ricky)",
          text: [
            "설명 : 길거리를 돌아다니면서 버려진 물건들을 괴롭힘,<br/>그러나 허당 오히려 버려진 물건들을 도와줌",
            "특징 : 험악한 얼굴<br/>머리에 십자가 밴드<br/>입에서 절대 떼어놓지 않는 생선",
          ],
          image: "ricky.png",
        },
      ],
    };
  },
};
</script>
<style>
.paragraph-group {
  margin-bottom: 1rem;
}
.subtitle {
  margin-bottom: 0 !important;
}
.product-title {
  font-size: 2.5vh;
  font-weight: bold;
}
</style>
<style scoped>
.page {
  text-align: center;
}
.product-area {
  text-align: left;
}
</style>
