<template>
  <div class="home">
    <app-navigation></app-navigation>
    <img alt="Trenton Daniels logo" src="../assets/logo-black.png">
    <app-project-list msg="Creative Developer"></app-project-list>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectList from '@/components/ProjectList.vue'
import Navigation from '@/views/Navigation.vue'

export default {
  name: 'Home',
  components: {
    'app-project-list': ProjectList,
    'app-navigation': Navigation
  }
}
</script>
