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
      this.setNavbarColor(to.path);
    },
  },
  mounted() {
    var route = this.$route.path;
    this.setNavbarColor(route);
    document.addEventListener("scroll", () => {
      var scrollValue = document.documentElement.scrollTop;
      const route = this.$route.path;
      if (route == "/") {
        if (scrollValue != 0) {
          document.getElementById("navbar").style.background =
            "rgba(0, 0, 0, 0.4)";
        } else if (scrollValue == 0) {
          document.getElementById("navbar").style.background = "transparent";
        }
      }
    });
  },
  methods: {
    setNavbarColor(path) {
      if (path != "/") {
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
  z-index: 3;
  position: fixed;
  top: 0;
}
.navbar-burger {
  color: white !important;
}
hr.solid {
  border: 0;
  opacity: 0.5;
  border-top: 0.5px solid rgb(0, 0, 0);
  margin: 0 auto;
  width: 88vw;
}

@media screen and (max-width: 1023px) {
  #navbar {
    padding: 0 !important;
  }
  a.navbar-link {
    color: black !important;
  }
  a.navbar-item.router-link-exact-active.router-link-active {
    color: black;
  }
}
@media screen and (min-width: 1024px) {
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
    color: #4f83d6;
  }

  .navbar-end {
    align-items: center !important;
  }

  .navbar-dropdown a.navbar-item {
    padding-right: 0 !important;
  }
  hr.solid {
    margin: 0 auto !important;
    opacity: 0.5;
    width: 80% !important;
  }
  #navbar {
    padding: 0 20vw;
  }
}
.navbar-menu.is-active {
  display: block;
  background-color: rgba(255, 255, 255, 0.6);
  filter: blur(10);
}
.navbar-menu {
  display: none;
}
</style>
