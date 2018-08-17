<template>
    <div id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/work">Work</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>       
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
    text-decoration: none;
    &.router-link-exact-active {
      color: #000000;
    }
  }
  li {
    white-space: nowrap;
    list-style-type: none;
  }
}
</style>
