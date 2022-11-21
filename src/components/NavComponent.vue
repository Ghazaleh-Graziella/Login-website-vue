<template>
  <MDBNavbar
    expand="lg"
    dark
    bg="dark"
    container
    id="nav"
    v-if="$store.state.user"
  >
    <MDBNavbarBrand href="#">Ghazaleh</MDBNavbarBrand>
    <!-- <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent"> -->
    <MDBNavbarNav class="mb-2 mb-lg-0">
      <MDBNavbarItem to="/home"> Home </MDBNavbarItem>
      <MDBNavbarItem to="/about"> About </MDBNavbarItem>
      <MDBNavbarItem @click="$store.dispatch('logout')"> Logout </MDBNavbarItem>
    </MDBNavbarNav>
    <!-- Search form -->
    <MDBNavbarItem to="/login" class="d-flex"> Login </MDBNavbarItem>
    <!-- </MDBCollapse> -->
  </MDBNavbar>

  <router-view />
</template>

<script>
import {
  MDBNavbar,
  // MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  // MDBCollapse,
} from "mdb-vue-ui-kit";
import { useStore } from "vuex";
import { onBeforeMount } from "vue";
export default {
  components: {
    MDBNavbar,
    // MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    // MDBCollapse,
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
