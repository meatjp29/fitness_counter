<template>
  <footer>
    <nav>
      <ul>
        <li>
          <router-link to="/" active-class="active">
            <span class="material-symbols-outlined"> home </span>
          </router-link>
        </li>
        <li>
          <router-link to="/situp" active-class="active">
            <span class="material-symbols-outlined"> home </span>
          </router-link>
        </li>
        <li>
          <router-link to="/history" active-class="active">
            <span class="material-symbols-outlined"> auto_graph </span>
          </router-link>
        </li>
        <li>
          <router-link to="/option" active-class="active">
            <span class="material-symbols-outlined"> settings </span>
          </router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;

  width: 100%;
}
ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  a {
    text-align: center;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    &.active {
      background-color: var(--color-white);
      color: var(--color-primary);
    }
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