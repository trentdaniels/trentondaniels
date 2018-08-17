<template>
  <div class="about">
    <app-navigation></app-navigation>
    <h1>This is an about page</h1>

  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'About',
  components: {
    'app-navigation': Navigation
  }
}
</script>

