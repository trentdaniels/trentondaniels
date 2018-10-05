<template>
    <div id="imageContainer">
        <img :src="image" :alt="alt" /> 
    </div>
</template>

<script>
    export default {
        name: 'ImageContainer',
        data() {
            return {
                image: require('@/assets/Name.jpg'),
                alt: 'An image of me!'
            }
        }
    }
</script>

<style lang="scss" scoped>
#imageContainer {
    overflow: hidden;
    text-align: center;
    img {
        margin: 0;
        display: block;
        width: auto;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        
    }
}

</style>