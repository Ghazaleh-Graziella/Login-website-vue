<template>
  <MDBNavbar expand="lg" dark bg="dark" container id="nav">
    <MDBNavbarBrand href="#">Ghazaleh</MDBNavbarBrand>
    <!-- <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent"> -->
    <MDBNavbarNav class="mb-2 mb-lg-0">
      <MDBNavbarItem to="/"> Home </MDBNavbarItem>
      <MDBNavbarItem to="/about"> About </MDBNavbarItem>
    </MDBNavbarNav>
    <MDBNavbarItem @click="$store.dispatch('logout')"> Logout </MDBNavbarItem>
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

export default {
  components: {
    MDBNavbar,
    // MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    // MDBCollapse,
  },
  setup() {},
};
</script>
