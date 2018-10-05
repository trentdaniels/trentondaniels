<template>
    <div id="project">
        <div class="details">
            <h1>{{ project.name }}</h1>
            <p>{{ project.shortDescription }}</p>
        </div>
        <div class="button">
            <button>Go to Project</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Project',
        props: ['project']
    }
</script>

<style lang="scss" scoped>
    #project {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
    }
</style>