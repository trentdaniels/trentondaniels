<template>
    <div class="img-container">
      <img :alt="this.altCaption" :src="this.srcImage" />
    </div>
</template>

<script>
export default {
  name: 'ImageContainer',
  props: {
    srcImage: String,
    altCaption: String
  },
  data: function () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

