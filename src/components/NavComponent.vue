<template>
  <MDBNavbar expand="lg" dark bg="dark" container>
    <MDBNavbarBrand href="#">Ghazaleh</MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem to="/home"> Home </MDBNavbarItem>
        <MDBNavbarItem to="/about"> About </MDBNavbarItem>
      </MDBNavbarNav>
      <!-- Search form -->
      <MDBNavbarItem to="/login" class="d-flex"> Login </MDBNavbarItem>
    </MDBCollapse>
  </MDBNavbar>

  <router-view />
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
import { useStore } from "vuex";
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

    const store = useStore();
    return {
      collapse1,
      dropdown1,

      user: store.state.user,
    };
  },
};
</script>
