<template>
  <div class="home">
    <app-navigation></app-navigation>
    <h1 id="msg" v-for="project in projects" :key="project.id" v-if="project.id === currentProject">{{ project.msg }}</h1>
    <img src="@/assets/logo-black.png" id="logo" alt="Personal Logo">
    <div class="heading">
      <h1 id="main-heading">CREATIVE<br>DEVELOPER.</h1>
    </div>
    <app-project-description :projects="projects" :currentProject="currentProject">
      <button @click="incrementProjects(currentProject)" id="circleButton">&#x021BB;</button>
    </app-project-description>
    <app-home-image-container :projects="projects" :currentProject="currentProject" id="main-img"></app-home-image-container>
    <app-secondary-image :projects="projects" :currentProject="currentProject" id="secondary-img"></app-secondary-image>

    <app-social-media></app-social-media>
    
  </div>
</template>

<script>
// @ is an alias to /src
import SocialMedia from '@/components/SocialMedia.vue'
import ProjectDescription from '@/components/ProjectDescription.vue'
import Navigation from '@/components/Navigation.vue'
import HomeImageContainer from '@/components/HomeImageContainer.vue'
import SecondaryImageContainer from '@/components/SecondaryImageContainer.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    'app-navigation': Navigation,
    'app-home-image-container': HomeImageContainer,
    'app-project-description': ProjectDescription,
    'app-social-media': SocialMedia,
    'app-secondary-image': SecondaryImageContainer
  },
  data () {
    return {
      originalHeight: 0
    }
  },
  computed: {
    currentProject () {
      return this.$store.state.currentProject
    },
    projects () {
      return this.$store.state.projects
    }
  },

  methods: {
    ...mapActions([
      'incrementProjects'
    ]),
    incrementProjects() {
      let projectToIncrement = this.projects.find(project => project.id === this.currentProject)
      this.$store.dispatch('incrementProjects', projectToIncrement)
    },
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: grid;
    grid-template: 10vh 30vh 20vh 30vh 10vh / 10vw repeat(2,20vw) repeat(2, 15vw) 20vw;
    align-content: center;
    .rotate {
      animation: rotate 1s;
    }
    
    #msg {
      grid-area: 1 / 6 / span 1 /  span 1;
      background-color: white;
      width: 100%;
      height: 100%;
      align-self: center;
    }
    #logo {
      grid-area: 2 / 6 / span 1 / span 1;
      width: 80%;
      align-self: center;
      justify-self: start;
      padding: 17px;
      box-sizing: border-box;
    }
    .heading {
      grid-area: 2 / 3 / span 1 / span 3;
      z-index: 15;
      width: 100%;
      height: 100%;
      #main-heading {
        color: black;
        text-align: left;
        font-size: 5rem;
        line-height: 5rem;
      }
    }
    #social-media {
      grid-area: 3 / 6 / span 3 / span 1;
      justify-self: end;
    }
    #main-img {
      grid-area: 1 / 2 / span 5 / span 2;
    }
    #secondary-img {
      grid-area: 4 / 5 / span 2 / span 2;
    }
    #project-description {
      grid-area: 4 / 3 / span 2 / span 1;
      
      #circleButton {
        grid-area: 2 / 3 / span 1/ span 1;
        align-self: end;
        justify-self: center;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        background: black;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    #nav {
    grid-column: 1 / span 1;
    grid-row: 1 / span 5;
    }   
  }
  @keyframes rotate {
      from { transform: rotateZ(0deg)}
      to {transform: rotateZ(360deg)}
  }

</style>
