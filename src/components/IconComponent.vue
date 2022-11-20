<template>
  <i
    :id="id"
    :size="size"
    :onclick="onclick"
    :disabled="disabled"
    :class="icon"
  />
</template>

<script>
export default {
  name: "IconComponent",
  props: {
    id: String,
    size: String,
    onclick: Function,
    disabled: Boolean,
    icon: String,
  },
  computed() {
    console.log(this.icon);
    console.log("this is Icon");
  },
};
</script>

<style></style>
