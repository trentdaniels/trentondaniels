<template>
    <div class="work">
      <app-navigation></app-navigation>
      <div v-for="project in projects" :key="project.id" class="project" v-if="project.id === currentProject">
        <h1 class="title">{{project.name}}</h1>
        <h4 class="description">{{ project.description }}</h4>
        <button type="button">Go To Project</button>
      </div>
      <div>
        <button @click="increase">Previous</button>
        <button @click="decrease">Next</button>
      </div>
    </div>

</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'Work',
  components: {
    'app-navigation': Navigation
  },
  data: function () {
    return {
      currentProject: 1
    }
  },
  computed: {
    projects () {
      return this.$store.state.projects
    }
  },
  methods: {
    increase () {
      this.currentProject++
      if (this.currentProject > this.projects.length) {
        this.currentProject = 1
      }
    },
    decrease () {
      this.currentProject--
      if (this.currentProject < 1) {
        this.currentProject = this.projects.length
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  .work {
    display: grid;
    width: 100vw;
    height: 100vh;
    align-items:center;
    grid-template: repeat(2, 1fr) / 10vw 1fr;
    .title {
      font-size: 8rem;
      color: black;
    }
    .description {
      font-size: 4rem;
      color: black;
    }
    #nav {
    width: 100%;
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
    }
    .project {
      width: 80%;
      justify-self: center;
      text-align: left;
    }
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
        background-color: black;
      }
    }
  }
</style>
