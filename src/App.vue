<template>
  <AppHeader />
  <router-view />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
@import url("https://unpkg.com/destyle.css@3.0.2/destyle.min.css");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@400;700&display=swap");

body,
html {
  margin: 0;
  padding: 0;

  background: hsla(176, 61%, 87%, 1);
}
</style>