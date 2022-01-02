<template>
  <div>
    <div
      style="
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: end;
      "
    >
      <img
        :src="require('@/assets/photo.png')"
        style="
          height: 100vh;
          width: 100vw;
          object-fit: cover;
          z-index: -1;
          position: absolute;
          filter: brightness(0.6);
        "
      />
      <div class="slogan-group">
        <p>교육이 기술의 발전을<br />따라갈 수 있도록.</p>
        <a href="/welcome">
          <b-button
            type="is-primary"
            size="is-medium"
            rounded
            style="margin-top: 3vh"
          >
            자세히 알아보기
          </b-button>
        </a>
      </div>
    </div>
    <b-carousel>
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium ${carousel.color}`">
          <div class="product-area" data-aos="fade">
            <div class="product-text">
              <p class="title is-2">{{ carousel.title }}</p>
              <p class="subtitle is-5">
                {{ carousel.text }}
              </p>
              <a :href="carousel.route">
                <b-button
                  type="is-primary"
                  rounded
                  style="width: 150px; margin-top: 3vh"
                >
                  자세히 알아보기
                </b-button>
              </a>
            </div>
            <img
              class="product-media"
              :src="require(`@/assets/${carousel.image}`)"
            />
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
    <div class="notice-area">
      <h1 class="title is-9 notice-title">COZY 소식</h1>
      <div class="notice-post" v-for="notice in notices" :key="notice.id">
        <SimplePost :post="notice" category="{name:'notice'}" />
      </div>
      <router-link to="/notice" style="float: right">더 보기</router-link>
    </div>
    <div class="subscribe-area">
      <p class="title is-9">뉴스레터 구독</p>
      <p class="subtitle is-8">COZY의 소식을 이메일로 받아보실 수 있습니다.</p>
      <section class="subscribe-form">
        <b-field style="margin-right: 10px; width: 100%">
          <b-input type="email" v-model="email" rounded></b-input
        ></b-field>

        <b-button rounded @click="subscribe" type="is-primary">구독</b-button>
      </section>
      <span>
        구독 시 <a @click="modalActive = true">개인정보 수집 및 이용</a>에
        동의하는 것으로 간주합니다.
      </span>
    </div>
    <b-modal :active="modalActive" has-modal-card>
      <div class="card">
        <div class="card-content">
          <div class="content">
            <p class="title is-4">개인정보 수집 및 이용 동의</p>
            <p class="subtitle is-6">
              유한책임회사 코지는 뉴스레터 발송을 위해 필요한 최소한의
              개인정보만을 수집 및 이용합니다.
            </p>
            <b-table :data="data" :columns="columns"></b-table>
            <br />
            <p class="title is-4">동의를 거부하는 경우에 대한 안내</p>
            동의하지 않을 경우 개인정보 수집·이용 동의를 거부할 권리가 있습니다.
            거부할 경우 뉴스레터 구독 서비스를 이용할 수 없습니다.
          </div>
        </div>
        <footer class="card-footer">
          <a @click="modalActive = false" class="card-footer-item">닫기</a>
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script>
import SimplePost from "@/components/Board/SimplePost.vue";
export default {
  components: {
    SimplePost,
  },
  data() {
    return {
      modalActive: false,
      email: "",
      data: [
        {
          purpose: "유한책임회사 코지 뉴스레터 발송",
          item: "이메일주소",
          period: "서비스 종료 시 또는 뉴스레터 구독 해지 시 파기",
        },
      ],
      columns: [
        { field: "purpose", label: "수집·이용 목적" },
        { field: "item", label: "수집·이용 항목" },
        { field: "period", label: "보유·이용 기간" },
      ],
      carousels: [
        {
          title: "H4Pay",
          text: "교내 매점의 온라인 결제 및 예약 시스템을 통해 펜데믹 상황에서도 매점 운영을 원활히 해줍니다.",
          color: "light",
          route: "/product/h4pay",
          image: "product/h4pay/overview.png",
        },
        {
          title: "COZY Players",
          text: "COZY를 대표하는 매력적인 친구들을 만나보세요.",
          color: "light",
          route: "/character",
          image: "character/farrow_hi.png",
        },
      ],
      notices: [],
    };
  },
  methods: {
    pushTo(param) {
      this.$router.push(param.route);
    },
    getNotice() {
      this.$axios
        .get(`${process.env.VUE_APP_API_URL}/board/notice`)
        .then((res) => {
          console.log(res);
          if (res.status == 200 && res.data.status) {
            this.notices = res.data.posts.slice(0, 5);
          }
        });
    },
    subscribe() {
      if (this.email != "" && this.mailValidate) {
        this.$axios
          .post(`${process.env.VUE_APP_API_URL}/mail/subscribe`, {
            email: this.email,
          })
          .then((res) => {
            if (res.status == 200) {
              alert("구독해주셔서 감사합니다. 양질의 소식을 찾아뵙겠습니다.");
            } else {
              alert("죄송합니다, 구독에 실패했습니다.");
            }
          })
          .catch((err) => {
            console.log(err);
            alert("죄송합니다, 오류가 발생했습니다.");
          });
      } else {
        alert("이메일을 올바르게 입력해주세요!");
      }
    },
  },
  computed: {
    mailValidate() {
      const mailReg = new RegExp(
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      );
      return mailReg.test(this.email);
    },
  },
  created() {
    this.getNotice();
  },
};
</script>

<style>
.subscribe-form {
  display: flex;
  justify-content: center;
  margin-top: 3vh;
}
.subscribe-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0 20vw 10vh;
}
.subscribe-title {
  font-size: 4.5vh;
  font-weight: bold;
}
.notice-area {
  padding: 10vh 20vw;
}

.product-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 10vh 0;
}
.product-text {
  width: 30vw;
  margin-right: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#app {
  margin: 0px;
}
.slogan-group {
  font-size: 4.5vh;
  font-weight: bold;
  color: white;
  position: absolute;
  bottom: 15vh;
  text-align: center;
}
.product-media {
  height: 300px;
  width: 300px;
  object-fit: contain;
}

@media screen and (max-width: 1023px) {
  .product-area {
    flex-direction: column !important;
    align-items: center !important;
    padding: 10vh 0 !important;
  }
  .product-media {
    margin: 10vh 0;
  }
  .product-text {
    margin: 0;
    width: 100%;
  }
}
</style>
<style lang="sass"></style>

<style scoped>
@media screen and (max-width: 1023px) {
  .product-area {
    flex-direction: column !important;
    align-items: center !important;
    padding: 10vh 20vw !important;
  }
}
</style>
