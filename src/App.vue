<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: 'BebasNeue';
  src: url('./fonts/BebasNeue-Regular.otf');
}
@font-face {
  font-family: 'OpenSans';
  src: url('./fonts/OpenSans-Light.ttf');
}
.router-link-active {
  font-weight: bold;
}

</style>
