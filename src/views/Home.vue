<template>
  <div class="home" @scroll="handleScroll()">
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
      scrollHeightY: window.scrollY
    }
  },
  computed: {
    scrollHeight () {
      return window.scrollY
    },
    currentProject() {
      return this.$store.state.currentProject;
    },
    projects() {
      return this.$store.state.projects;
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

    }
  },
  beforeMount () {
    window.addEventListener('scroll', () => {
      let originalScrollHeight = this.scrollHeightY
      if (this.scrollHeight < originalScrollHeight) {
        console.log('scrolling...')
        this.increaseCurrentId()
      } else if (this.scrollHeight > originalScrollHeight) {
        this.decreaseCurrentId()
      } else {
        console.log('scroll not working')
      }
      this.scrollHeightY = originalScrollHeight
    })
  },
  beforeDestroy () {

  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: grid;
    grid-template: 102vh / 10% 45% 45%;
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
