<template>
    <div id="creation">
        <project-nav :projects="projects"></project-nav>
        <project-header 
            :title="project.name" 
            :image="project.image"
            :description="project.shortDescription"
        >
        </project-header>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ProjectNav from '@/components/Creation/ProjectNav.vue'
    import ProjectHeader from '@/components/Creation/ProjectHeader.vue'
    export default {
        name: 'Creation',
        props: ['id'],
        components: {
            ProjectNav,
            ProjectHeader
        },
        computed: {
            ...mapGetters(['projects']),
            project() {
                let project = this.projects.find(p => p.name === this.id)
                return project;
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>