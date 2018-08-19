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
  background-color: #000000;
  transform: rotateZ(-90deg);  
  position: relative;
  left: 0;
  a {
    font-weight: bold;
    color: rgb(187, 187, 187);
    text-decoration: none;
    &.router-link-exact-active {
      color: #FFFFFF;
    }
  }
  li {
    list-style-type: none;
    display: inline-block;
    padding: 30px 15px;
  }
  ul {
    padding: 25px 0;
    margin: 0;
  }
}
</style>
