<template>
    <div class="img-container">
      <img alt="Trenton Daniels logo" :src="projectImage">
    </div>
</template>

<script>
export default {
    name: 'ImageContainer',
    props: {
        projectImage: Array,
        currentId: Number
    }
}
</script>

