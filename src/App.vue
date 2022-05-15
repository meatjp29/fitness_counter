<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
@import url("https://unpkg.com/destyle.css@3.0.2/destyle.min.css");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@400;700&display=swap");

body,
html {
  margin: 0;
  padding: 0;
  background-image: linear-gradient(var(--color-primary),var(--color-primary-l));
}

body{
  min-height:100vh;
}

:root {
  --color-white: #fff;
  --color-primary: #e55;
  --color-primary-l: #ee5533;
  --color-secondary: #000;
    --color-alto-03: rgba(255 255 255 / 0.03);
  --color-alto-05: rgba(255 255 255 / 0.05);
    --color-alto-08: rgba(255 255 255 / 0.08);
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>