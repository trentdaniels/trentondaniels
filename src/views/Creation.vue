<template>
    <div id="creation">
        <project-nav :projects="projects"></project-nav>
        <project-header 
            :id="project.id"
        >
        </project-header>
        <project-branding :project="project"></project-branding>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ProjectNav from '@/components/Creation/ProjectNav.vue'
    import ProjectHeader from '@/components/Creation/ProjectHeader.vue'
    import ProjectBranding from '@/components/Creation/ProjectBranding.vue'
    export default {
        name: 'Creation',
        props: ['id'],
        components: {
            ProjectNav,
            ProjectHeader,
            ProjectBranding
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