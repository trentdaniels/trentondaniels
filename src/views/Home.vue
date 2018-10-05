<template>
  <div class="home">
    <project-toggle @changed="changeProject"></project-toggle>
    <image-container :project="projects[currentProject]"></image-container>
  </div>
    
</template>

<script>
// @ is an alias to /src
import ProjectToggle from '@/components/Home/ProjectToggle.vue'
import ImageContainer from '@/components/Home/ImageContainer.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    ProjectToggle,
    ImageContainer
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
    #projectToggle {
      grid-area: 1 / 1 / span 3 / span 1;
    }
    #imageContainer {
      grid-area: 1 / 2 / span 3 / span 1;
    }

  }
 
</style>
