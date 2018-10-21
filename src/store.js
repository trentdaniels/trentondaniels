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
  
  getters: {
    projects(state) {
      let projects = []
      for(let project in state) {
        projects.push(state[project])
      }
      return projects;
    }
  }
})
