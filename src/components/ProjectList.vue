<template>
  <div class="project-list">
    <h1>{{ msg }}</h1>
    <div v-if="project.id === currentId" class="project" v-for="project in projects" :key="project.id">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
    </div>
    <button @click="nextProject">Next Project</button>
    <button @click="prevProject">Previous Project</button>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  props: {
    msg: String
  },
  data: function () {
    return {
      currentId: 1,
      projects: [
        {
          id: 1,
          name: 'Slack Rebrand',
          description: 'Rebrand of the popular team collaboration app',
        },
        {
          id: 2,
          name: 'HYPEBEAST Awards',
          description: 'Award show created with branding and a website mockup for scheduling and event information',
        },
        {
          id: 3,
          name: 'INFORMAL Magazine',
          description: 'Magazine that combines hip-hop and streetwear throughout several ages',
        }
      ]
    }
  },
  computed: {
    
  },
  methods: {
    nextProject: function () {
        this.currentId++;
        if (this.currentId > this.projects.length) {
          this.currentId = 1;
        }
    },
    prevProject: function () {
      this.currentId--;
      if (this.currentId < 1) {
        this.currentId = this.projects.length
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  text-align: center;
  margin: 40px 0 auto;
}
p {
  text-align: center;
  width: 50%;
  margin: auto;
}
.project {
  text-align: center;
}
</style>
