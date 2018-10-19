import Vue from 'vue'
import Vuex from 'vuex'
import hypebeast from './ProjectDetails/Hypebeast'
import slack from './ProjectDetails/Slack'
import informal from './ProjectDetails/Informal'
import takeAKnee from './ProjectDetails/TakeAKnee'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'slack': slack,
    'hypebeast-awards': hypebeast,
    'informal': informal,
    'take-a-knee': takeAKnee
  },
  state: {
    projects: [
      {
        id: 'slack',
        name: 'Slack Rebrand',
        shortDescription: 'Rebrand of the popular team collaboration app',
        image: require('@/assets/placeholder.jpg'),
        secondaryImage: require('@/assets/desert.jpg'),
        msg: 'Creative.',
        color: '#000000'
      },
      {
        id: 'hypebeast-awards',
        name: 'HYPEBEAST Awards',
        shortDescription: 'Award show created with branding and a website mockup for scheduling and event information',
        image: require('@/assets/moon.jpg'),
        msg: 'Intuitive.',
        color: '#333333'
      },
      {
        id: 'informal',
        name: 'INFORMAL Magazine',
        shortDescription: 'Magazine that combines hip-hop and streetwear throughout several ages',
        image: require('@/assets/camera.jpg'),
        msg: 'Innovative.',
        color: '#666666'
      },
      {
        id: 'take-a-knee',
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
