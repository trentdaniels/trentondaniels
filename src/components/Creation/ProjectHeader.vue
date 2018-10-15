<template>
    <header id="projectHeader">
        <h1>{{ title }}</h1>
        <div class="image-container">
            <img :src="image" :alt="title"/>
        </div>
        <p>{{ description }}</p>
    </header>
</template>

<script>
    export default {
        name: 'ProjectHeader',
        props: ['title', 'image', 'description']
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