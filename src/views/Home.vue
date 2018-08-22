<template>
  <div class="home">
    <app-navigation></app-navigation>
    <app-home-image-container :projects="projects" :projectNumber="currentId"></app-home-image-container>
    <app-project-list :projects="projects" :projectNumber="currentId" msg="Creativity.">
      <div class="button-group">
        <button @click="decreaseCurrentId">Previous</button>
        <button @click="increaseCurrentId">Next</button>
      </div>
    </app-project-list>
    
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectList from '@/components/ProjectList.vue'
import Navigation from '@/components/Navigation.vue'
import HomeImageContainer from '@/components/HomeImageContainer.vue'

export default {
  name: 'Home',
  components: {
    'app-project-list': ProjectList,
    'app-navigation': Navigation,
    'app-home-image-container': HomeImageContainer
  },
  data: function () {
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
      currentId: 1
    }
  },
  methods: {
    increaseCurrentId: function () {
      this.currentId++
      if (this.currentId > this.projects.length) {
        this.currentId = 1
      }
    },
    decreaseCurrentId: function () {
      this.currentId--
      if (this.currentId < 1) {
        this.currentId = this.projects.length
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: grid;
    grid-template: 100vh / 10% 45% 45%;
    width: 100vw;
    align-items: center;
    justify-items: center;
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
    }
  }
  
</style>
