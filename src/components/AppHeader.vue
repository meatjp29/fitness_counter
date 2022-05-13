<template>
  <header>
    <h1>MUSCLE COUNTER</h1>
  </header>
</template>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid #000;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
  h1 {
    font-size: 1rem;
    line-height: 1;
  }
}
</style>

<script>
export default {
  data() {
    return {
      navList: [
        { title: "Page1", to: "/Page1" },
        { title: "Page2", to: "/Page2" },
      ],
    };
  },
};
</script>