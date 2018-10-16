<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
@font-face {
  font-family: 'BebasNeue';
  src: url('./fonts/BebasNeue-Regular.otf');
}
@font-face {
  font-family: 'OpenSans';
  src: url('./fonts/OpenSans-Light.ttf');
}

</style>
