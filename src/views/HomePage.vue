<template>
    <div v-if="$store.state.user">Home</div>
</template>

<script>
import { useStore } from "vuex";
import { onBeforeMount } from "vue";
export default {
    setup() {
        const store = useStore();
    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
    return {
      user: store.state.user,
    };
    }
}
</script>