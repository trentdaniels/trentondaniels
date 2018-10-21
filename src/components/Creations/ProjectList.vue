<template>
    <div class="projectList">
        <div class="list">
            <router-link
                :to="{name: 'Creation', params: {id: project.id}}"
                v-for="project in projects"
                :key="project.id">
                    <div class="project" :style="{backgroundImage: `url('${project.image}')`}">
                        <h2>{{ project.name }}</h2>
                    </div>
            </router-link>
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
    flex-flow: row nowrap;
    align-items: stretch;
    justify-content: space-around;
    background-color: black;
    .list {
        display: grid;
        grid-template: 50% 50% / 50% 50%;
        flex: 1 1 100%;
        a {
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: stretch;
            position: relative;
            &:hover {
                text-decoration: underline;
                text-decoration-color: white;
            }
           .project {
                flex-basis: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-position: center center;
                background-size: cover;
                h2 {
                    color: white;
                    text-decoration: none;
                }

            } 
       }
       
    }
}
</style>