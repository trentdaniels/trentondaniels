<template>
    <div class="contact">
       <navigation></navigation>
       <form-labels></form-labels>
       <social-media></social-media>
       <div class="contact-info">
         <h1>Contact.</h1>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quibusdam autem facere earum quae ex quam provident. Sint dolores soluta pariatur quasi, expedita minima repellendus consequuntur, ab ipsa, amet iure.
         </p>
       </div>
    </div>

</template>

<script>
import Navigation from '@/components/Navigation.vue'
import FormLabels from '@/components/Contact/FormLabels.vue'
import SocialMedia from '@/components/SocialMedia.vue'
export default {
  name: 'Contact',
  components: {
    Navigation,
    FormLabels,
    SocialMedia
  },
  data: function () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .contact {
    display: grid;
    grid-template: 15% 1fr 15% / 60% 40%;
    height: 100vh;
    width: 100vw;
    #navigaton {
      grid-area: 1 / 2 / span 1 / span 1;
    }
    #formLabels {
      grid-area: 1 / 1 / span 3 / span 1;
    }
    #social-media {
      grid-area: 3 / 2 / span 1 / span 1;
    }
    .contact-info {
      grid-area: 2 / 2 / span 1 / span 1;
      align-self: center;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      p {
        width: 85%;
      }
    }
  }

</style>
