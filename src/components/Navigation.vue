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
  padding-top: 20px;
  left: 0;
  position: relative;
  a {
    font-weight: bold;
    color: rgb(187, 187, 187);
    text-decoration: none;
    padding: 15px 5px;
    &.router-link-exact-active {
      color: #000000;
    }
  }
  li {
    white-space: nowrap;
    list-style-type: none;
    transform: rotateZ(-90deg);
    padding: 20px 0px;;
  }
}
</style>
