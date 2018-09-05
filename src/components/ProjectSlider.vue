<template>
    <div id ="slider">
        <transition-group tag="div" name="slide" class="slide-container" appear>
        <div v-for="project in projects"
            :key="project.id"
            :class="{ activeProject: project.currentProject === true }"
            class = "project"
            @click="changeActiveProject(project)"
        >
            <h1>{{ project.name }}</h1>
        </div>
        </transition-group>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ProjectSlider',
  props: {
    currentProject: Number
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'projects'
    ]),
  },
  methods: {
    ...mapActions([
      'changeCurrentProject',
      'reorderProjects'
    ]),
    changeActiveProject (project) {
      this.$emit('activeProjectChanged', project)
    }
  }

}
</script>

<style lang="scss" scoped>
#slider {
    height: 100%;
    display: flex;
    justify-content: center;
    .slide-container {
        display: grid;
        justify-self: center;
        height: 100%;
        width: 90%;
        grid-template: 1fr / repeat(4, 1fr);
        grid-column-gap: 15px;
        grid-auto-flow: column;
        align-items: end;
        align-content: end;
        justify-content: space-around;
        justify-items: end;
        .project {
            grid-area: 1 / span 1;
            order: 0;
        }
        .activeProject {
            order: 5;
            background: wheat;
            height: 60%;
            transition: height 1s ease-in-out 1s;
        }
    }
    @keyframes fadeRight {
        from {transform: translateX(-30px); opacity: 0}
        to {transform: translateX(0); opacity: 1}
    }
    .slide-leave-active, .slide-enter-active {
        transition: all 1s ease-in-out;
    }
    .slide-leave-active {
        align-self: center;
        justify-self: flex-end;
        position: absolute;
    }
    .slide-leave {
        justify-self: flex-start;
    }
    .slide-enter, .slide-leave-to {
        opacity: 0;
    }
    .slide-move {
        transition: all 1s;
    }
}
</style>
