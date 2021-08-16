<template>
  <div class="home">
    <div id="mn">
      <ul id="menu">
        <li>
          <a href="/">
            <img src="@/assets/cozy.png" style="width: 100px; margin: 20px" />
          </a>
        </li>
      </ul>
    </div>

    <full-page
      ref="fullpage"
      :options="options"
      id="fullpage"
      style="z-index: 1; position: fixed"
    >
      <div class="section">
        <div
          class="container is-vcentered"
          style="display: flex; margin: auto; width: fit-content; height: 80vh"
        >
          <div class="columns is-centered" style="margin: auto">
            <div class="column is-narrow">
              <p class="names">창의 Creative</p>
              <p class="names">기회 Opportunity</p>
              <p class="names">매력 Zingy</p>
              <p class="names">젊음 Youth</p>
            </div>
            <div class="column is-narrow">
              <p class="names">보다 편안한</p>
              <p class="names">생활을 위해</p>
              <p class="names">새로운 것을</p>
              <p class="names">만듭니다</p>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="slide">
          <div
            class="container"
            style="
              text-align: center;
              width: 100vw;
              display: flex;
              height: 80vh;
            "
          >
            <h3 class="names">Who We Are?</h3>
          </div>
        </div>
        <div class="slide" v-for="member in members" :key="member">
          <div id="wrap">
            <div
              class="columns is-multiline"
              id="inner"
              style="
                display: flex;
                justify-content: center;
                padding-top: 0vh;
                width: fit-content;
              "
            >
              <div class="column">
                <img
                  :src="require(`@/assets/members/${member.img}`)"
                  :alt="`${member.name} 사진`"
                  style="width: 20vh"
                  :rounded="rounded"
                />
              </div>
              <div class="column">
                <h1 class="names">{{ member.position }}</h1>
                <h1 class="names" style="font-size: 3vh">
                  {{ member.name }} {{ member.engname }}
                </h1>
                <h1 class="names" style="font-size: 2.3vh">
                  {{ member.work }}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="slide">
          <div
            class="container"
            style="text-align: center; width: 90vw; display: flex; height: 80vh"
          >
            <h3 class="names">Our Services</h3>
          </div>
        </div>
        <div class="slide" v-for="product in products" :key="product">
          <div id="wrap">
            <div
              class="columns is-multiline"
              id="inner"
              style="
                display: flex;
                justify-content: center;
                padding-top: 0vh;
                width: 80vw;
              "
            >
              <div class="column is-narrow">
                <img
                  :src="require(`@/assets/product/h4pay/${product.img}`)"
                  :alt="`${product.name} 이미지`"
                  style="width: 20vh"
                  :rounded="rounded"
                />
                <h1 class="names">{{ product.name }}</h1>
                <h1 class="prodDesc">{{ product.description }}</h1>
                <h1 class="prodCategory">분야: {{ product.category }}</h1>
                <br />
                <router-link :to="`H4Pay`" style="color: white">
                  자세히 알아보기
                  <vue-fontawesome :icon="['fas', 'arrow-circle-right']" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="slide">
          <div
            class="container"
            style="
              text-align: center;
              width: 100vw;
              display: flex;
              justify-content: center;
              float: center;
            "
            id="wrap"
          >
            <div id="inner">
              <div class="columns" style="text-align: left; font-size: 2.5vh">
                <div class="column" style="">
                  <p>유한책임회사 코지</p>
                  <p>사업자등록번호 : 619-88-02154</p>
                  <p>충청북도 진천군 덕산읍 대하로 114 102동 502호</p>
                </div>
                <div class="column">
                  <p>전화문의 : 010-4809-8358</p>
                  <p>이메일 : chiwon0923@cozyllc.co.kr</p>
                  <p>FAX : 0508-941-8358</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </full-page>
    <div class="floatingLeader">
      <vue-fontawesome :icon="['fas', 'chevron-down']" />
    </div>
  </div>
</template>
<script>
import members from "../../members.json";
import products from "../../products/products.json";
export default {
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: true,
        menu: "#menu",
        navigation: false,
        sectionsColor: [
          "#41b883",
          "#ff5f45",
          "#0798ec",
          "#fec401",
          "#1bcee6",
          "#ee1a59",
          "#2c3e4f",
          "#ba5be9",
          "#b4b8ab",
        ],
        verticalCentered: true,
      },
      products: products,
      members: members,
    };
  },
  methods: {
    afterLoad() {
      console.log("After load");
    },
  },
};
</script>

<style>
.floatingLeader {
  position: absolute;
  font-size: 1.5rem;
  bottom: 5px;
  right: 50vw;
  z-index: 1;
  color: white;
}

table {
  border-spacing: 10vw;
}

.prodCategory {
  color: white;
  font-weight: 400;
  margin: 0px;
  font-size: 1.4vh;
}

.prodDesc {
  color: white;
  font-weight: 400;
  margin: 0px;
  font-size: 2vh;
}

.names {
  color: white;
  font-weight: bold;
  font-size: 4vh;
  margin: auto;
}

#wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
}

#inner {
  align-self: center;
  padding: 2rem;
}

#mn {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 2;
  left: 0px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.fp-controlArrow.fp-next {
  border-width: 3vh 0 3vh 3vh;
}
.fp-controlArrow.fp-prev {
  border-width: 3vh 3vh 3vh 0;
}
</style>