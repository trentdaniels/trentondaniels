<template>
    <div class="creations">
      <project-list></project-list>
      <navigation></navigation>
      <div class="title"><h1>CR<br>EA<br>TE</h1></div>
      <social-media></social-media>
    </div>

</template>

<script>
import Navigation from '@/components/Navigation.vue'
import ProjectList from '@/components/Creations/ProjectList.vue'
import SocialMedia from '@/components/SocialMedia.vue'
export default {
  name: 'Creations',
  components: {
    Navigation,
    ProjectList,
    SocialMedia
  },
  data() {
    return {
      
    }
  },
  computed: {
  },
  methods: {
    
  }

}
</script>

<style lang="scss" scoped>
.creations {
  display: grid;
  grid-template: 15% 1fr 15% / 60% 40%;
  width: 100vw;
  height: 100vh;
  #navigation {
    grid-area: 1 / 2 / span 1 / span 1;
  }
  .projectList {
    grid-area: 1 / 1 / span 3 / span 1;
  }
  .title {
    grid-area: 2 / 2 / span 1 / span 1;
    h1 {
      font-size: 6rem;
    }
  }
  #social-media {
    grid-area: 3 / 2 / span 1 / span 1;
  }
}
</style>
