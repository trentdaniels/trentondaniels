<template>
    <div id="imageContainer">
        <img :src="project.image" :alt="project.shortDescription" />
    </div>
</template>

<script>
    export default {
        name: 'ImageContainer',
        props: ['project']
        
    }
</script>

<style lang="scss" scoped>
#imageContainer {
    overflow: hidden;
    img {
        object-fit: cover;
        object-position: center center;
        
    }
}

</style>