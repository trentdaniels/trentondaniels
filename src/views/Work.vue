<template>
    <div class="work">
        <app-navigation></app-navigation>
        <h1>This is the projects page</h1>
    </div>
    
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
    name: 'Work',
    components: {
        'app-navigation': Navigation
    }
}
</script>

<style lang="scss" scoped>
  .work {
    display: grid;
    grid-template: 100vh / 10vw 45vw 45vw;
    width: 100vw;
    height: 100vh;
    align-items:center;
  }
  #nav {
    width: 100%;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  .img-container {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    width: 100%;
  }
  .form{
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }
</style>

