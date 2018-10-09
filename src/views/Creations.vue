<template>
    <div class="creations">
      <logo></logo>
      <project-list></project-list>
      <navigation></navigation>
      <creation></creation>
      <social-media></social-media>
    </div>

</template>

<script>
import Navigation from '@/components/Navigation.vue'
import ProjectList from '@/components/Creations/ProjectList.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import Logo from '@/components/Logo.vue'
import Creation from '@/components/Creations/Creation.vue'
export default {
  name: 'Creations',
  components: {
    Navigation,
    ProjectList,
    SocialMedia,
    Logo,
    Creation
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
  grid-template: 15% 1fr 15% / 20% 40% 40%;
  width: 100vw;
  height: 100vh;
  #navigation {
    grid-area: 1 / 3 / span 1 / span 1;
  }
  .projectList {
    grid-area: 1 / 2 / span 3 / span 1;
  }
  #creation {
    grid-area: 1 / 1 / span 3 / span 1;
  }
  #logo {
    grid-area: 1 / 1 / span 1 / span 1;
  }
  #social-media {
    grid-area: 3 / 3 / span 1 / span 1;
  }
}
</style>
