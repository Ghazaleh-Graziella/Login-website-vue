<template>
  <NavComponent />
  <div class="icon">
    <MDBIcon solid icon="skating" size="lg" />
    <MDBIcon solid icon="skating" />
    <MDBIcon solid icon="skating" />
  </div>
</template>

<script>
import NavComponent from "./components/NavComponent.vue";
import { MDBIcon } from "mdb-vue-ui-kit";
export default {
  name: "App",
  components: {
    NavComponent,
    MDBIcon,
  },
};
</script>

<style lang="scss">
@import "~@/../mdb/scss/index.free.scss";

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
body {
  background-image: url("./assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  margin:auto;
  padding: 0;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(0, 300%);
  }
}
</style>
