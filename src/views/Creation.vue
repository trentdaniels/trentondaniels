<template>
    <div id="creation">
        <logo></logo>
        <creation-toggle @changed="changeSection" :sections="sections" :currentSection="currentSection" :name="project.name"></creation-toggle>
        <navigation></navigation>
        <template v-if="currentSection === 0">
            <about-info :project="project"></about-info>
            <about-container :project="project"></about-container>
        </template>
        <template v-else-if="currentSection === 1">
            <branding :colors="project.colors" :typefaces="project.typefaces"></branding>
            <branding-info>
                <h1>Branding</h1>
                <p>{{ project.branding }}</p>
            </branding-info>
        </template>
        <template v-else-if="currentSection === 2">
            <slider :solutions="project.solutions"></slider>
            <branding-info>
                <h1>Solutions</h1>
                <p>{{ project.branding }}</p>
            </branding-info>
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
    import AboutInfo from '@/components/Creation/AboutInfo.vue'
    import Branding from '@/components/Creation/ProjectBranding.vue'
    import BrandingInfo from '@/components/Creation/BrandingInfo.vue'
    import Slider from '@/components/Creation/ProjectSlider.vue'
    export default {
        name: 'Creation',
        props: ['id'],
        components: {
            CreationToggle,
            Navigation,
            SocialMedia,
            AboutContainer,
            AboutInfo,
            Logo,
            Branding,
            BrandingInfo,
            Slider
        },
        data() {
            return {
                sections: [
                    'Inspiration',
                    'Branding',
                    'Solution'
                ],
                currentSection: 0
            }
        },
        computed: {
            project() {
                const project = this.$store.state[this.id]
                return project;
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
    #aboutInfo {
        grid-area: 2 / 3 / span 1 / span 1;
    }
    #projectBranding {
        grid-area: 1 / 2 / span 3 / span 1;
    }
    #brandingInfo {
        grid-area: 2 / 3 / span 1 / span 1;
    }
    #project-slider {
        grid-area: 1 / 2 / span 3 / span 1;
    }
}

</style>