<template>
  <NavComponent />
</template>

<script>
import NavComponent from "./components/NavComponent.vue";
export default {
  name: "App",
  components: {
    NavComponent,
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
