<template>
    <div class="contact">
        <app-navigation></app-navigation>
        <app-image-continer :srcImage="src" :altCaption="alt"></app-image-continer>
        <app-form></app-form>
    </div>
    
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import ImageContainer from '@/components/ImageContainer.vue'
import Form from '@/components/Form.vue'

export default {
    name: 'Contact',
    components: {
        'app-navigation': Navigation,
        'app-image-continer': ImageContainer,
        'app-form': Form
    },
    data: function () {
        return {
            src: require('@/assets/logo-black.png'),
            alt: 'Contact image description'
        }
    }
}
</script>

<style lang="scss" scoped>
  .contact {
    display: grid;
    grid-template: 100vh / 10vw 45vw 45vw;
    width: 100vw;
    height: 100vh;
    align-items:center;
  }
  #nav {
    width: 100%;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  .img-container {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    width: 100%;
  }
  .form{
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }
</style>