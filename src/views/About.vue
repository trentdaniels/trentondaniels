<template>
  <div class="about">
    <logo></logo>
    <about-toggle @changed="changeCategory" :categories="categories"></about-toggle>
    <navigation></navigation>
    <image-container :category="currentCategory"></image-container>
    <me :category=activeCategory></me>
    <social-media></social-media>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import ImageContainer from '@/components/About/ImageContainer.vue'
import Me from '@/components/About/Me.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import AboutToggle from '@/components/About/AboutToggle.vue'
import Logo from '@/components/Logo.vue'

export default {
  name: 'About',
  components: {
    Navigation,
    ImageContainer,
    Me,
    SocialMedia,
    AboutToggle,
    Logo
  },
  data() {
    return {
      activeCategory: 0,
      categories: [
        {
          name: 'Me',
          img: require('@/assets/about1.jpg')
        },
        {
          name: 'Contact',
          img: require('@/assets/about2.jpg')
        }
      ]
    }
  },
  methods: {
    changeCategory(index) {
      this.activeCategory = index
    }
  },
  computed: {
    currentCategory() {
      return this.categories[this.activeCategory]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
    display: grid;
    grid-template: 15% 1fr 15% / 20% 40% 40%;
    height: 100vh;
    width: 100vw;
    #navigation {
      grid-area: 1 / 3 / span 1 / span 1;
    }
    #imageContainer {
      grid-area: 1 / 2 / span 3 / span 1;
    }
    #social-media {
      grid-area: 3 / 3 / span 1 / span 1;
    }
    #logo {
      grid-area: 1 / 1 / span 1 / span 1;
    }
    #aboutToggle {
      grid-area: 1 / 1 / span 3 / span 1;
    }
}
  
</style>
