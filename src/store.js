import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 1,
        name: 'Slack Rebrand',
        shortDescription: 'Rebrand of the popular team collaboration app',
        image: require('@/assets/placeholder.jpg'),
        secondaryImage: require('@/assets/desert.jpg'),
        msg: 'Creative.'
      },
      {
        id: 2,
        name: 'HYPEBEAST Awards',
        shortDescription: 'Award show created with branding and a website mockup for scheduling and event information',
        image: require('@/assets/moon.jpg'),
        msg: 'Intuitive.'
      },
      {
        id: 3,
        name: 'INFORMAL Magazine',
        shortDescription: 'Magazine that combines hip-hop and streetwear throughout several ages',
        image: require('@/assets/logo-black.png'),
        msg: 'Innovative.'
      },
      {
        id: 4,
        name: 'Take a Knee',
        shortDescription: 'Website that informs about Colin Kapernick\'s stand against inequality',
        image: require('@/assets/Logo.png'),
        msg: 'Thoughtful.'
      }
    ],
    links: [
      { 
          id: 1,
          url: 'https://www.twitter.com/DanielTrents',
          img: require('@/assets/Twitter.png')
      },
      { 
          id: 2,
          url: 'https://www.github.com/trentdaniels',
          img: require('@/assets/Github.png')
      },
      { 
          id: 3,
          url: 'https://www.behance.net/trentondaniels',
          img: require('@/assets/Behance.png')
      },
      { 
          id: 4,
          url: 'https://www.instagram.com/trentedaniels/',
          img: require('@/assets/Instagram.png')
      },
      {
        id: 5,
        url: 'https://www.linkedin.com/in/trentondaniels/',
        img: require('@/assets/LinkedIn.png')
      }
    ],
    categories: [
      'Me',
      'Contact'
    ]
    
  },
  getters: {
    projects(state) {
      return state.projects;
    },
    links(state) {
      return state.links;
    },
    categories(state) {
      return state.categories
    }
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
