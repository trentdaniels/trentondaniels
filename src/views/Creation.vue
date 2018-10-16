<template>
    <div id="creation">
        <creation-toggle @changed="changeSection" :sections="sections"></creation-toggle>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import CreationToggle from '@/components/Creation/CreationToggle.vue'
    export default {
        name: 'Creation',
        props: ['id'],
        components: {
            CreationToggle
        },
        data() {
            return {
                sections: [
                    'About',
                    'Branding',
                    'Finals'
                ],
                currentSection: 0
            }
        },
        computed: {
            ...mapGetters(['projects']),
            project() {
                let project = this.projects.find(p => p.name === this.id)
                let fullProject = this.$store.state[project.id]
                return fullProject;
            }
        },
        methods: {
            changeSection(index) {
                this.currentSection = index;
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>