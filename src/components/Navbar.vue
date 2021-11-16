<template>
  <b-navbar id="navbar">
    <template #brand>
      <b-navbar-item tag="router-link" class="navbar-image" :to="{ path: '/' }">
        <img
          src="@/assets/cozy_black.png"
          style="width: 100px; filter: invert(1)"
        />
      </b-navbar-item>
    </template>
    <template #end>
      <span v-for="(item, i) in NavItem" :key="i">
        <b-navbar-item
          v-if="item.route != undefined"
          :to="item.route"
          tag="router-link"
        >
          {{ item.name }}
        </b-navbar-item>
        <b-navbar-dropdown
          v-if="item.items != undefined"
          :label="item.name"
          hoverable
          active
          collapsible
          style="color: white"
        >
          <span v-for="(underItem, j) in item.items" :key="j">
            <b-navbar-item :to="`${underItem.route}`" tag="router-link">
              {{ underItem.name }}
            </b-navbar-item>
            <hr class="solid" />
          </span>
        </b-navbar-dropdown>
      </span>
    </template>
  </b-navbar>
</template>

<script>
import NavItem from "../navitem.json";
export default {
  data() {
    return {
      NavItem,
    };
  },
  watch: {
    $route(to) {
      if (to.path != "/") {
        window.document.getElementById("navbar").style.background = "black";
      } else {
        window.document.getElementById("navbar").style.background =
          "transparent";
      }
    },
  },
};
</script>

<style>
#navbar {
  width: 100%;
  background-color: transparent;
  z-index: 1;
  position: fixed;
  top: 0;
  padding: 0 20vw;
}
.navbar-burger {
  color: white !important;
}
a.navbar-link.is-active {
  color: black !important;
}
a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: rgba(255, 255, 255, 0.4) !important;
}
a.navbar-item.navbar-image:hover,
a.navbar-item.navbar-image:focus {
  background-color: transparent !important;
}

a.navbar-link {
  color: white !important;
}
a.navbar-item.router-link-exact-active.router-link-active {
  color: white;
}

hr.solid {
  border: 0;
  opacity: 0.5;
  border-top: 0.5px solid rgb(255, 255, 255);
  margin: 0 auto;
  width: 10vh;
}

@media screen and (max-width: 1023px) {
  hr.solid {
    border: 0;
    opacity: 0.5;
    border-top: 0.5px solid rgb(0, 0, 0);
    margin: 0 auto;
    width: 88vw;
  }
  #navbar {
    padding: 0 !important;
  }
  a.navbar-link {
    color: black !important;
  }
  a.navbar-item.router-link-exact-active.router-link-active {
    color: black;
  }
  .navbar-menu.is-active {
    background-color: rgba(255, 255, 255, 0.6);
    filter: blur(10);
  }
}
</style>
