import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentProject: 1,
    projects: [
      {
        id: 1,
        name: 'Slack Rebrand',
        description: 'Rebrand of the popular team collaboration app',
        image: require('@/assets/logo-black.png'),
        currentProject: true
      },
      {
        id: 2,
        name: 'HYPEBEAST Awards',
        description: 'Award show created with branding and a website mockup for scheduling and event information',
        image: require('@/assets/logo.png'),
        currentProject: false
      },
      {
        id: 3,
        name: 'INFORMAL Magazine',
        description: 'Magazine that combines hip-hop and streetwear throughout several ages',
        image: require('@/assets/logo-black.png'),
        currentProject: false
      },
      {
        id: 4,
        name: 'Take a Knee',
        description: 'Website that informs about Colin Kapernick\'s stand against inequality',
        image: require('@/assets/logo.png'),
        currentProject: false
      }
    ]
  },
  mutations: {
    changeCurrentProject (state, payload) {
      state.currentProject += payload
    },
    resetProject (state) {
      if (state.currentProject < 1) {
        state.currentProject = state.projects.length
      } else if (state.currentProject > state.projects.length) {
        state.currentProject = 1
      }
    },
    reorderProjects (state, payload) {
      if (payload !== 0) {
        let projects = state.projects
        projects.find(project => project.currentProject === true).currentProject = false
        projects.find(project => project.id === payload.id).currentProject = true
        state.projects = projects
      }
    },
    updateCurrentNumber (state, payload) {
      state.currentProject = payload.id
    },
    incrementProjects(state,payload) {
      let projects = state.projects
      projects.find(project => project.id === payload.id).currentProject = false
      
      projects.find(project => {
        if(payload.id + 1 > projects.length)
        {
          return project.id === 1
        }
        else {
          return project.id === payload.id + 1
        }
      }).currentProject = true
      
      state.currentProject++
      if (state.currentProject > projects.length) {
        state.currentProject = 1
      }
      state.projects = projects
    }
  },
  actions: {
    changeCurrentProject (context, payload) {
      context.commit('changeCurrentProject', payload)
      context.commit('resetProject')
    },
    reorderProjects (context, payload) {
      context.commit('reorderProjects', payload)
      context.commit('updateCurrentNumber', payload)
    },
    incrementProjects(context, payload) {
      context.commit('incrementProjects', payload)
    }
  }
})
