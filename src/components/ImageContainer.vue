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

<style lang="scss" scoped>
.img-container {
  width: 100%;
  img {
    width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
}
</style>
