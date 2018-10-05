<template>
    <div id="project">
        <h1>{{ project.name }}</h1>
        <p>{{ project.shortDescription }}</p>
        <button>Go to Project</button>
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
    }
</style>