<template>
    <div id="aboutContainer">
        <div class="image-container">
            <img :src="project.image" :alt="project.name"/>
        </div>
        <div class="statement">
            <p>{{ project.shortDescription }}</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'AboutContainer',
        props: ['project'],
    }
</script>

<style lang="scss" scoped>
#aboutContainer {
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: black;
    .image-container {
        overflow: hidden;
        height: 80%;
        display: flex;
        justify-content: center;
        img {
            align-self: center;
            width: 80%;
            max-height: 85%;
            object-fit: cover;
            object-position: 50% 50%;
        }
    }
    .statement {
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: center;
        p {
            align-self: flex-start;
            color: white;
            width: 80%;
        }
    }
}

</style>