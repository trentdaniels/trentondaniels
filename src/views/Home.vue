<template>
  <div class="home">
    <app-navigation></app-navigation>
    <app-image-container :projects="projects" :projectNumber="currentId"></app-image-container>
    <app-project-list :projects="projects" :projectNumber="currentId" msg="Creative Developer" :increaseId="increaseCurrentId" :decreaseId="decreaseCurrentId"></app-project-list>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectList from '@/components/ProjectList.vue'
import Navigation from '@/components/Navigation.vue'
import ImageContainer from '@/components/ImageContainer.vue'

export default {
  name: 'Home',
  components: {
    'app-project-list': ProjectList,
    'app-navigation': Navigation,
    'app-image-container': ImageContainer
  },
  data: function () {
    return {
      projects: [
        {
          id: 1,
          name: 'Slack Rebrand',
          description: 'Rebrand of the popular team collaboration app'
        },
        {
          id: 2,
          name: 'HYPEBEAST Awards',
          description: 'Award show created with branding and a website mockup for scheduling and event information'
        },
        {
          id: 3,
          name: 'INFORMAL Magazine',
          description: 'Magazine that combines hip-hop and streetwear throughout several ages'
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
  img {
    width: 100%;
  }
  .home {
    display: grid;
    grid-template: 100vh / 10vw 45vw 45vw;
    width: 100vw;
    height: 100vh;
    align-items:center;
  }
  #nav {
    width: 100%;
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
</style>
