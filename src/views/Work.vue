<template>
    <div class="work">
        <app-navigation></app-navigation>
    </div>

</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'Work',
  components: {
    'app-navigation': Navigation
  },
  data: function () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .work {
    display: grid;
    width: 100vw;
    height: 100vh;
    align-items:center;
    grid-template: repeat(4, 1fr) / 10vw repeat(4, 1fr);
    #nav {
    width: 100%;
    grid-column: 1 / span 1;
    grid-row: 1 / span 4;
    }
  }
</style>
