<template>
  <div class="burger"
       @click="toggleBurger"
       :class="{ 'burger--open': this.open }">
    <div class="bar"/>
    <div class="bar"/>
    <div class="bar"/>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleBurger(e) {
      this.$emit("toggle", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.burger {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-between;
  margin: 1.5rem 0;
  position: relative;
  width: 2rem;
  &--open {

  }
  .bar {
    background-color: var(--vt-c-black);
    display: block;
    height: 0.25rem;
    width: 2rem;
  }
}
</style>
