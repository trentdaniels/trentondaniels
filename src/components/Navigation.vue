<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/work">Work</router-link> |
        <router-link to="/contact">Contact</router-link>
    </div>
</template>

<script>
export default {
    name: 'Navigation'

}
</script>


<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: rgb(187, 187, 187);
    &.router-link-exact-active {
      color: #000000;
    }
  }
}
</style>
