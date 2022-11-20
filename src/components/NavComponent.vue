<template>
  <MDBNavbar expand="lg" dark bg="dark" container>
    <MDBNavbarBrand href="#">Ghazaleh</MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem to="#" > Home </MDBNavbarItem>
        <MDBNavbarItem href="#"> About </MDBNavbarItem>
      </MDBNavbarNav>
      <!-- Search form -->
      <MDBNavbarItem href="#" class="d-flex"> Login </MDBNavbarItem>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  components: {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
  },
  setup() {
    const collapse1 = ref(false);
    const dropdown1 = ref(false);
    return {
      collapse1,
      dropdown1,
    };
  },
};
</script>
