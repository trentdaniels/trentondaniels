<template>
    <div id ="slider">
        <transition-group tag="div" name="slide" class="slide-container">
        <div v-for="(project, index) in projects"
            :key="index"
            :class="{ activeProject: project.id === currentProject &&
                    project.currentProject === true,
                    lastProject: index === projects.length - 1 }"
            class = "project"
            @click="changeActiveProject(index)"
        >
            <h1>{{ project.name }}</h1>
            <p>{{ project.description }}</p>
        </div>
        </transition-group>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

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
    ])
  },
  methods: {
    ...mapActions([
      'changeCurrentProject',
      'reorderProjects'
    ]),
    changeActiveProject (projectIndex) {
      this.$store.dispatch('reorderProjects', projectIndex)
      this.$emit('currentNumberChanged', 0)
    }
  }

}
</script>

<style lang="scss" scoped>
#slider {
    .slide-container {
        display: flex;
        flex-flow: row-reverse nowrap;
        align-items: flex-end;
        justify-content: space-between;
        .project {
            order: 1;
        }
    }
    .slide-move {
        transition: all 1s ease-in-out;
    }
    .slide-leave-active, .slide-enter-active {
        transition: all 1s ease-in-out;
    }
    .slide-leave-active {
        position: absolute;
    }
    .slide-enter, .slide-leave-to {
        opacity: 0;

    }
    .activeProject {
        background: wheat;
        height: 100%;
        transition: all 1s ease-in-out;
    }
}
</style>
