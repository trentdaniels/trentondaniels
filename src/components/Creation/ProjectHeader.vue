<template>
    <header id="projectHeader">
        <h1>{{ project.name }}</h1>
        <div class="image-container">
            <img :src="project.image" :alt="project.name"/>
        </div>
        <p>{{ project.shortDescription }}</p>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'ProjectHeader',
        props: ['id'],
        computed: {
            ...mapGetters(['projects']),
            project() {
                return this.projects.find(p => p.id === this.id)
            }
        }
    }
</script>

<style lang="scss" scoped>
#projectHeader {
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .image-container {
        width: 80%;
        max-height: 500px;
        overflow: hidden;
        img {
            width: 100%;
            object-fit: cover;
            object-position: 50% 50%;
        }
    }
}

</style>