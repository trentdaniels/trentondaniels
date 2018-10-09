<template>
    <div id="imageContainer">
        <transition name="fade" mode="out-in">
            <img :src="project.image" :alt="project.shortDescription" :key="project.id" />
        </transition>
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
        width: 75%;
    }
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
}

</style>