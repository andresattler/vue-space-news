<template>
  <nav class="nav">
    <n-link to="/">Home</n-link>
    <n-link to="/post">Post</n-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped lang="scss">
@import '~/styles/mixins.scss';
.nav {
  background-color: var(--color-secondary);
  padding: 8px;
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  height: var(--nav-height);
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  @include desktopBp {
    bottom: initial;
    top: 0;
    justify-content: initial;
  }
  a {
    font-weight: bold;
    color: var(--color-primary);
    margin-right: 6px;

    &.router-link-exact-active {
      color: var(--font-color-primary);
    }
  }
}
</style>
