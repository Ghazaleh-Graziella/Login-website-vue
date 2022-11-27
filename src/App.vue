<template>
  <MDBNavbar
    expand="lg"
    dark
    bg="dark"
    container
    id="nav"
    v-if="$store.state.user"
  >
    <MDBNavbarBrand>Ghazaleh</MDBNavbarBrand>
    <MDBNavbarNav class="mb-2 mb-lg-0">
      <MDBNavbarItem to="/"> Home </MDBNavbarItem>
      <MDBNavbarItem to="/about"> About </MDBNavbarItem>
    </MDBNavbarNav>
    <MDBNavbarItem @click="$store.dispatch('logout')"> Logout </MDBNavbarItem>
  </MDBNavbar>

  <router-view />
</template>
<script>
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
} from "mdb-vue-ui-kit";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
  },
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });

    return {
      user: store.state.user,
    };
  },
};
</script>

<style lang="scss">
@import "~@/../mdb/scss/index.free.scss";

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
body {
  // background-image: url("./assets/bg.png");
  background-color: grey;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  margin: auto;
  padding: 0;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(0, 300%);
  }
}
</style>
