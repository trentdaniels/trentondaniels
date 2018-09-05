<template>
  <div class="home">
    <app-navigation></app-navigation>
    <h1 class="title">Creativity.</h1>
    <app-project-slider :currentProject="currentProject" @activeProjectChanged="updateActiveProject"></app-project-slider>
    <div v-for="project in projects" :key="project.id" v-if="project.id === currentProject" class="description">
      <p>{{ project.description }}</p>      
    </div>
    <button @click="incrementProjects(currentProject)" class="circle">&#x021BB</button>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectList from '@/components/ProjectList.vue'
import Navigation from '@/components/Navigation.vue'
import HomeImageContainer from '@/components/HomeImageContainer.vue'
import ProjectSlider from '@/components/ProjectSlider.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    'app-project-list': ProjectList,
    'app-navigation': Navigation,
    'app-home-image-container': HomeImageContainer,
    'app-project-slider': ProjectSlider
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
      'changeCurrentProject',
      'reorderProjects',
      'incrementProjects'
    ]),
    changeCurrentId (amount) {
      this.$store.dispatch('changeCurrentProject', amount)
    },
    updateActiveProject (project) {
      this.$store.dispatch('reorderProjects', project)
    },
    incrementProjects() {
      let projectToIncrement = this.projects.find(project => project.id === this.currentProject)
      this.$store.dispatch('incrementProjects', projectToIncrement)
    },

    handleScroll () {
      let currentHeight = window.scrollY
      if (currentHeight > this.originalHeight) {
        console.log('scrolling up one...')
        this.increaseCurrentId(1)
      } else if (currentHeight < this.originalHeight) {
        console.log('scrolling down one...')
        this.decreaseCurrentId(1)
      } else {
        console.log('did not scroll')
      }
      this.originalHeight = currentHeight
    },
    debounce (functionToCall, wait, immediate) {
      let timeout
      return function () {
        let args = arguments
        let delayFunction = function () {
          timeout = null
          if (!immediate) {
            functionToCall.apply(this, args)
          }
        }
        let callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(delayFunction, wait)
        if (callNow) {
          functionToCall.apply(this, args)
        }
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.debounce(this.handleScroll, 350, true))
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.debounce(this.handleScroll, 350, true))
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: grid;
    grid-template: 10vh 75vh 15vh / 10vw 65vw 25vw;
    .title {
      grid-area: 1 / 3 / span 1 /  span 1;
    }
    .description {
      grid-area: 2 / 3 / span 1 / span 1;
      align-self: center;
      justify-self: center;
      font-size: 1.5rem;
      width: 80%;
    }
    .circle {
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
    #nav {
    grid-column: 1 / span 1;
    grid-row: 1 / span 3;
    }
    #slider {
    grid-area: 1 / 2 / span 2 / span 1;
    align-self: end;
    }
    .project-list {
      grid-column: 3 / span 1;
      grid-row: 1 / span 3;
      width: 100%;
      overflow-y: auto;
      .button-group {
        margin: 15px;
        width: 100%;
        button {
          color: black;
          padding: .8rem;
          border-color: black;
          font-size: .7rem;
          outline: none;
          background-color: white;
          border-radius: 1rem;
          transition: 0.4s ease;
          &:hover {
            color: white;
            border-color: black;
            background-color: black;
          }
        }
      }
    }
  }

</style>
