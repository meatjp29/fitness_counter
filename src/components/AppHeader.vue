<template>
  <header>
    <h1>MUSCLE COUNTER</h1>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 1rem;
  font-family: "Roboto", sans-serif;
  position: sticky;
  top: 0;
  color: var(--color-dark-01);
  text-align: center;
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