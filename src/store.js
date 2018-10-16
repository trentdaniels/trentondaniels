import Vue from 'vue'
import Vuex from 'vuex'
import hypebeast from './ProjectDetails/Hypebeast'
import slack from './ProjectDetails/Slack'
import informal from './ProjectDetails/Informal'
import takeAKnee from './ProjectDetails/TakeAKnee'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    1: slack,
    2: hypebeast,
    3: informal,
    4: takeAKnee
  },
  state: {
    projects: [
      {
        id: 1,
        name: 'Slack Rebrand',
        shortDescription: 'Rebrand of the popular team collaboration app',
        image: require('@/assets/placeholder.jpg'),
        secondaryImage: require('@/assets/desert.jpg'),
        msg: 'Creative.',
        color: '#000000'
      },
      {
        id: 2,
        name: 'HYPEBEAST Awards',
        shortDescription: 'Award show created with branding and a website mockup for scheduling and event information',
        image: require('@/assets/moon.jpg'),
        msg: 'Intuitive.',
        color: '#333333'
      },
      {
        id: 3,
        name: 'INFORMAL Magazine',
        shortDescription: 'Magazine that combines hip-hop and streetwear throughout several ages',
        image: require('@/assets/camera.jpg'),
        msg: 'Innovative.',
        color: '#666666'
      },
      {
        id: 4,
        name: 'Take a Knee',
        shortDescription: 'Website that informs about Colin Kapernick\'s stand against inequality',
        image: require('@/assets/nature.jpg'),
        msg: 'Thoughtful.',
        color: '#999999'
      }
    ],
    
    
    
  },
  getters: {
    projects(state) {
      return state.projects;
    }
  },
  mutations: {

  },
  actions: {
    
  }
})
