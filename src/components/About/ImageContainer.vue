<template>
    <div id="imageContainer">
        <img :src="category.img" :alt="category.name" /> 
    </div>
</template>

<script>
    export default {
        name: 'ImageContainer',
        props: ['category']
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