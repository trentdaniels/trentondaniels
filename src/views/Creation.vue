<template>
    <div id="creation">
        <logo></logo>
        <creation-toggle @changed="changeSection" :sections="sections" :name="project.name"></creation-toggle>
        <navigation></navigation>
        <template v-if="currentSection === 0">
            <about-container :project="project"></about-container>
        </template>
        
        <social-media></social-media>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import CreationToggle from '@/components/Creation/CreationToggle.vue'
    import Navigation from '@/components/Navigation.vue'
    import SocialMedia from '@/components/SocialMedia.vue'
    import AboutContainer from '@/components/Creation/AboutContainer.vue'
    import Logo from '@/components/Logo.vue'
    export default {
        name: 'Creation',
        props: ['id'],
        components: {
            CreationToggle,
            Navigation,
            SocialMedia,
            AboutContainer,
            Logo
        },
        data() {
            return {
                sections: [
                    'Inspiration',
                    'Branding',
                    'Production'
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
#creation {
    display: grid;
    grid-template: 15% 1fr 15% / 20% 40% 40%;
    height: 100vh;
    width: 100vw;
    #creationToggle {
        grid-area: 1 / 1 / span 3 / span 1;
    }
    #navigation {
        grid-area: 1 / 3 / span 1 / span 1;
    }
    #social-media {
        grid-area: 3 / 3 / span 1 / span 1;
    }
    #aboutContainer {
        grid-area: 1 / 2 / span 3 / span 1;
    }
    #logo {
        grid-area: 1 / 1 / span 1 / span 1;
    }
}

</style>