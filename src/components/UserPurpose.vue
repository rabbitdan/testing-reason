<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
    <nav class="purpose">
      <RouterLink to="/learn" class="button button--option">Learn</RouterLink>
      <RouterLink to="/donate" class="button button--highlight">Donate</RouterLink>
    </nav>
</template>

<style lang="scss" scoped>
.purpose {
  display: flex;
}
</style>
