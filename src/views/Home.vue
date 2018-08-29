<template>
  <div class="home">
    <app-navigation></app-navigation>
    <app-home-image-container></app-home-image-container>
    <app-project-list msg="Creativity." >
      <div class="button-group">
        <button @click="decreaseCurrentId(1)">Previous Project</button>
        <button @click="increaseCurrentId(1)">Next Project</button>
        <p>{{ currentProject }}</p>
      </div>
    </app-project-list>

  </div>
</template>

<script>
// @ is an alias to /src
import ProjectList from '@/components/ProjectList.vue'
import Navigation from '@/components/Navigation.vue'
import HomeImageContainer from '@/components/HomeImageContainer.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    'app-project-list': ProjectList,
    'app-navigation': Navigation,
    'app-home-image-container': HomeImageContainer
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
      'incrementCurrentProject',
      'decrementCurrentProject'
    ]),
    increaseCurrentId (amount) {
      this.$store.dispatch('incrementCurrentProject', amount)
    },
    decreaseCurrentId (amount) {
      this.$store.dispatch('decrementCurrentProject', amount)
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
    grid-template: 101vh / 10% 45% 45%;
    width: 100vw;
    align-items: center;
    justify-items: center;
    overflow-y: auto;
    #nav {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    }
    .img-container {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    width: 100%;
    }
    .project-list {
      grid-column: 3 / span 1;
      grid-row: 1 / span 1;
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
