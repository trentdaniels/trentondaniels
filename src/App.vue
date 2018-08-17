<template>
  <div id="app">
      <app-navigation></app-navigation>
      <router-view/>
  </div>
</template>

<script>
import Navigation from './views/Navigation.vue'
export default {
  components: {
    'app-navigation': Navigation
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
