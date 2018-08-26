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
  width: 100%;
  height: 100%;
  li {
    list-style-type: none;
    padding: 10px 15px;
  }
  ul {
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0;
    align-content: center;
    justify-content: center;
    margin: 0;

  }
  a {
    font-weight: bold;
    color: rgb(187, 187, 187);
    text-decoration: none;
    &.router-link-exact-active {
      color: #FFFFFF;
    }
  }
}
</style>
