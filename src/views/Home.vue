<template>
  <div class="home">
    <logo></logo>
    <project-toggle @changed="changeProject" :currentProject="currentProject"></project-toggle>
    <image-container :project="projects[currentProject]"></image-container>
    <navigation></navigation>
    <project :project="projects[currentProject]"></project>
    <social-media></social-media>
  </div>
    
</template>

<script>
// @ is an alias to /src
import ProjectToggle from '@/components/Home/ProjectToggle.vue'
import ImageContainer from '@/components/Home/ImageContainer.vue'
import Navigation from '@/components/Navigation.vue'
import Project from '@/components/Home/Project.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import Logo from '@/components/Logo.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    ProjectToggle,
    ImageContainer,
    Navigation,
    Project,
    SocialMedia,
    Logo
  },
  data () {
    return {
      currentProject: 0
    }
  },
  computed: {
    ...mapGetters(['projects'])
  },
  methods: {
    changeProject(index) {
      this.currentProject = index
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: grid;
    grid-template: 15% 1fr 15% / 20% 40% 40%;
    height: 100vh;
    width: 100vw;
    #logo {
      grid-area: 1 / 1 / span 1 / span 1;
    }
    #projectToggle {
      grid-area: 1 / 1 / span 3 / span 1;
    }
    #imageContainer {
      grid-area: 1 / 2 / span 3 / span 1;
    }
    #navigation {
      grid-area: 1 / 3 / span 1 / span 1;
    }
    #project {
      grid-area: 2 / 3 / span 1 / span 1;
    }
    #social-media {
      grid-area: 3 / 3 / span 1 / span 1;
    }

  }
 
</style>
