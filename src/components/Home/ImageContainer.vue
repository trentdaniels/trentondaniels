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
    text-align: center;
    background-color: black;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    img {
        margin: 0;
        display: block;
        width: 80%;
    }
}

</style>