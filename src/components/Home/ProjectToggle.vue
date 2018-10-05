<template>
    <div id="projectToggle">
        <ul>
            <li v-for="(project, index) in projects" :key="index"><a @click="changeProject(index)">{{project.name}}</a></li>
        </ul>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
      name: 'ProjectToggle',
      computed: {
          ...mapGetters(['projects'])
      },
      methods: {
          changeProject(index) {
              this.$emit('changed', index)
          }
      }
        
    }
</script>

<style lang="scss" scoped>
#projectToggle {
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    justify-content: center;
    ul {
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: column nowrap;
        align-content: center;
        justify-content: center;
        li {
            list-style-type: none;
            a {
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
    

}

</style>