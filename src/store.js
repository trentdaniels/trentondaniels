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
  },
  mutations: {
    incrementCurrentProject(state, payload) {
      state.currentProject += payload;
    },
    decrementCurrentProject(state, payload) {
      state.currentProject -= payload
    },
    resetProject(state) {
      if (state.currentProject < 1) { 
        state.currentProject = state.projects.length
      }
      else if (state.currentProject > state.projects.length) {
        state.currentProject = 1
      }
    }
  },
  actions: {
    incrementCurrentProject(context, payload) {
      context.commit('incrementCurrentProject', payload)
      context.commit('resetProject')
    },
    decrementCurrentProject(context, payload) {
      context.commit('decrementCurrentProject', payload)
      context.commit('resetProject')
    },    
  }
})
