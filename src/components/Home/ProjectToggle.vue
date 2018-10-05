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
    background-color: black;
    ul {
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: column nowrap;
        align-content: center;
        justify-content: space-around;
        height: 20%;
        li {
            list-style-type: none;
            a {
                color: white;
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
    

}

</style>