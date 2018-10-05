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
                image: require('@/assets/Stripes-small.jpg'),
                alt: 'An image of me!'
            }
        }
    }
</script>

<style lang="scss" scoped>
#imageContainer {
    overflow: hidden;
    text-align: center;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    background-color: black;
    img {
        margin: 0;
        width: 70%;
        
    }
}

</style>