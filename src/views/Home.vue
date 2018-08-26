<template>
  <div class="home" @scroll="handleScroll()">
    <app-navigation></app-navigation>
    <app-home-image-container :projects="projects" :projectNumber="currentId"></app-home-image-container>
    <app-project-list :projects="projects" :projectNumber="currentId" msg="Creativity." >
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
      projects: [
        {
          id: 1,
          name: 'Slack Rebrand',
          description: 'Rebrand of the popular team collaboration app',
          image: require('@/assets/logo-black.png')
        },
        {
          id: 2,
          name: 'HYPEBEAST Awards',
          description: 'Award show created with branding and a website mockup for scheduling and event information',
          image: require('@/assets/logo.png')
        },
        {
          id: 3,
          name: 'INFORMAL Magazine',
          description: 'Magazine that combines hip-hop and streetwear throughout several ages',
          image: require('@/assets/logo-black.png')
        },
        {
          id: 4,
          name: 'Take a Knee',
          description: 'Website that informs about Colin Kapernick\'s stand against inequality',
          image: require('@/assets/logo.png')
        }
      ],
      currentId: 1,
      scrollHeightY: window.scrollY
    }
  },
  computed: {
    scrollHeight () {
      return window.scrollY
    },
    currentProject() {
      return this.$store.state.currentProject;
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
    decreaseCurrentId () {
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
