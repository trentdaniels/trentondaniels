<template>
    <div class="projectList">
        <div v-for="project in projects" :key="project.id">
            <h1>{{ project.name }}</h1>
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
    div {
        width: 100%;
        h1 {
            font-size: 2.5rem;
            color: white;
        }
        &:hover {
            background: white;
            h1 {
                color: black;
            }
        }
        
    }
}
</style>