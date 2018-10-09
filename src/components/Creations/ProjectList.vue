<template>
    <div class="projectList">
        <div class="list">
            <div class="project" v-for="project in projects" :key="project.id" :style="{'background-color': project.color}">
                <h3>{{ project.name }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'ProjectList',
        computed: {
            ...mapGetters(['projects'])
        }

    }
</script>

<style lang="scss" scoped>
.projectList {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
    background-color: black;
    .list {
       display: grid;
       grid-template: 50% 50% / 50% 50%;
       width: 100%;
       height: 100%;
       .project {
           align-self: center;
           justify-self: center;
           width: 100%;
           height: 100%;
           display: flex;
           justify-content: center;
           align-items: center;
           h3 {
               color: white;
           }
       } 
    }
}
</style>