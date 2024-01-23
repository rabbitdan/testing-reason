<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import UserMeta from './components/UserMeta.vue'
</script>

<template>
    <div class="wrapper">
      <UserMeta />
      <TheHeader />
      <RouterView />
    </div>
</template>

<style scoped>
.wrapper {
  font-family: 'Rubik', sans-serif;
  margin: 0 auto;
  max-width: 120rem;
  position: relative;
  width: 100%;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
