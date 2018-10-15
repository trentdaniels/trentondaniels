<template>
    <div id="creation">
        <project-nav></project-nav>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ProjectNav from '@/components/Creation/ProjectNav.vue'
    export default {
        name: 'Creation',
        props: ['id'],
        components: {
            ProjectNav
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